angular.module('app')
    .controller('homeController', ['$scope', 'firebaseFactory', HomeController]);

function HomeController($scope, firebaseFactory) {
    
    $scope.data = firebaseFactory.enquetes;
    
    var unwatch = firebaseFactory.enquetes.$watch(function () {
        $scope.loadData();
    });

    $scope.loadData = function () {
        firebaseFactory.enquetes.$loaded().then(function () {
            $scope.quizzes = [];
            angular.forEach(firebaseFactory.enquetes, function (fireQuiz) {
                var i = 0;
                var quiz = {
                    "id": i++,
                    "title": fireQuiz.title,
                    "description": fireQuiz.description,
                    "options": fireQuiz.options
                };
                $scope.quizzes.push(quiz);
            });
        });
    }
    $scope.loadData();
}