angular.module('app')
    .controller('homeController', ['$scope', 'firebaseFactory', '$uibModal', HomeController]);

function HomeController($scope, firebaseFactory, $uibModal) {

    $scope.data = firebaseFactory.enquetes;

    var unwatch = firebaseFactory.enquetes.$watch(function () {
        $scope.loadData();
    });

    $scope.loadData = function () {
        firebaseFactory.enquetes.$loaded().then(function () {
            $scope.quizzes = [];
            angular.forEach(firebaseFactory.enquetes, function (fireQuiz, key) {
                var i = 0;
                var quiz = {
                    "id": key,
                    "title": fireQuiz.title,
                    "description": fireQuiz.description,
                    "options": fireQuiz.options
                };
                $scope.quizzes.push(quiz);
            });
        });
    }

    $scope.answer = function (selectedQuiz) {
        var modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'views/vote.html',
            controller: 'voteController',
            controllerAs: 'vote',
            resolve: {
                quiz: function () {
                    return selectedQuiz;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log(selectedItem);
        }, function () { });
    }

    $scope.loadData();
}