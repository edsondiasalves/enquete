angular.module('app')
    .controller('homeController', ['$scope', 'quizzesService', 'authService', 'votesService', 'modalFactory', HomeController]);

function HomeController($scope, quizzesService, authService, votesService, modalFactory) {
    $scope.loadData = function () {
        quizzesService.readQuizzes().then(function (quizzes) {
            $scope.quizzes = quizzes;
        });
    }

    $scope.loadData();
}