angular.module('app')
    .controller('mainController', ['$scope', MainController]);

function MainController($scope) {
    $scope.alerts = [];

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.showSuccessMessage = function(msg){
        $scope.addAlert('success', msg);
    }

    $scope.showDangerMessage = function(msg){
        $scope.addAlert('danger', msg);
    }

    $scope.addAlert = function(type, msg){
        $scope.alerts.push({ type: type, msg: msg });
    }
}