angular.module('app')
    .controller('searchController', ['$scope', 'quizzesService', 'votesService', 'authService', 'modalFactory', SearchController]);

function SearchController($scope, quizzesService, votesService, authService, modalFactory) {
    $scope.search = function () {
        var response = quizzesService.readQuiz($scope.searchkey);
        if (response) {
            response.then(function (snap) {
                if (snap.exists()) {
                    $scope.quizzes = snap.val();
                }
            });
        }else{
            $scope.quizzes = null;
        }
    }
}