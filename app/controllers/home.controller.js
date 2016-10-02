angular.module('app')
    .controller('homeController', ['$scope', 'quizzesService', 'modalFactory', HomeController]);

function HomeController($scope, quizzesService, modalFactory) {

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

            quizzesService.voteQuiz(vote.quiz)
                .then(function () {
                    console.log('voted');
                })
                .catch(function (response) {
                    console.log(response);
                });
        });
    }

    $scope.loadData();
}