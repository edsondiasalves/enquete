angular.module('app')
    .controller('searchController', ['$scope', 'quizzesService', 'votesService', 'authService', 'modalFactory', SearchController]);

function SearchController($scope, quizzesService, votesService, authService, modalFactory) {
    $scope.search = function () {

        if (!$scope.searchkey) {
            $scope.quizzes = undefined;
            return;
        }

        var response = quizzesService.searchQuizzes($scope.searchkey)
            .then(function (quizzes) {
                $scope.quizzes = quizzes;
            });
    }
}