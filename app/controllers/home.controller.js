angular.module('app')
    .controller('homeController', ['$scope', 'quizzesService', 'authService', 'votesService', 'modalFactory', HomeController]);

function HomeController($scope, quizzesService, authService, votesService, modalFactory) {
    $scope.loadData = function () {
        quizzesService.readQuizzes().then(function (quizzes) {
            $scope.quizzes = quizzes;
        });
    }

    $scope.answer = function (selectedQuiz) {
        var modalInstance = modalFactory.open(
            'views/vote.html',
            'voteController',
            selectedQuiz
        );

        modalInstance.result.then(function (vote) {
            var option = vote.quiz.options[vote.selectedOption];
            option.votes = (option.votes == undefined ? 1 : option.votes += 1);

            var user = authService.getAuth().uid;
            var uservotequiz = {
                quizId: vote.quiz.$id,
                userOption: vote.selectedOption
            }

            votesService.createVoteUser(user, uservotequiz).then(function () {
                quizzesService.voteQuiz(vote.quiz)
                    .then(function () {
                        $scope.$parent.showSuccessMessage('Voto computado com sucesso!');
                    })
                    .catch(function (ref) {
                        $scope.handleError(ref);
                    });
            }).catch(function (ref) {
                $scope.handleError(ref);
            });
        });
    }

    $scope.handleError = function (ref) {
        var msg = 'Um erro ocorreu tente mais tarde!'
        if (ref.code === "PERMISSION_DENIED") {
            msg = 'É necessário estar logado para opinar';
        }
        $scope.$parent.showDangerMessage(msg);
    }

    $scope.loadData();
}