angular.module('app')
    .controller('searchController', ['$scope', 'quizzesService', SearchController]);

function SearchController($scope, quizzesService) {
    $scope.search = function () {
        
    }
}