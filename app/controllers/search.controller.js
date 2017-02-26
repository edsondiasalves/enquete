(function () {
    angular.module('app')
        .controller('searchController', ['$scope', 'quizzesService', SearchController]);

    function SearchController($scope, quizzesService) {
        $scope.search = function () {
            if (!$scope.searchkey) {
                $scope.quizzes = undefined;
                return;
            }

            quizzesService.searchQuizzes($scope.searchkey)
                .then(function (quizzes) {
                    $scope.quizzes = quizzes;
                });
        }
    }
})();