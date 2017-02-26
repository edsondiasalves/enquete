(function(){
angular.module('app')
    .controller('homeController', ['$scope', 'quizzesService', HomeController]);

function HomeController($scope, quizzesService) {
    $scope.loadData = function () {
        quizzesService.readQuizzes().then(function (quizzes) {
            $scope.quizzes = quizzes;
        });
    }

    $scope.loadData();
}
})();