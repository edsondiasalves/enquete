angular.module('app')
    .controller('createController', ['$scope', CreateController]);

function CreateController($scope) {
    $scope.quiz = {
        options: [
            { id: 1, desc: "" },
            { id: 2, desc: "" }
        ]
    };

    $scope.addOption = function () {
        var opt = { id: $scope.quiz.options.length + 1, desc: "" }
        $scope.quiz.options.push(opt);
    }

    $scope.removeOption = function () {
        $scope.quiz.options.pop();
    }

    $scope.create = function () {
        console.log($scope.quiz)
    }
}