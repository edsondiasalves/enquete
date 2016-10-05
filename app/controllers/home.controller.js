angular.module('app')
    .controller('homeController', ['$scope', 'quizzesService', 'authService', 'votesService', 'modalFactory', HomeController]);

function HomeController($scope, quizzesService, authService, votesService, modalFactory) {
    $scope.loadData = function () {
        quizzesService.readQuizzes().then(function (quizzes) {
            $scope.quizzes = quizzes;
        });
    }

    $scope.answer = function (selectedQuiz) {
        var auth = authService.getAuth();
        if (!auth) {
            $scope.handleError({ code: "PERMISSION_DENIED" });
            return;
        }

        var modalInstance = modalFactory.open(
            'views/vote.html',
            'voteController',
            selectedQuiz
        );

        modalInstance.result.then(function (vote) {
            var option = vote.quiz.options[vote.selectedOption];
            option.votes = $scope.increaseValue(option.votes);
            vote.quiz.totalVotes = $scope.increaseValue(vote.quiz.totalVotes);

            var userVoteQuiz = {
                user: auth == null ? '' : auth.uid,
                quizId: vote.quiz.$id,
                selectedOption: vote.selectedOption
            }

            votesService.createVoteUser(userVoteQuiz).then(function () {
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

    $scope.increaseValue = function (field) {
        return (field == undefined ? 1 : field += 1);
    }

    $scope.loadData();
}