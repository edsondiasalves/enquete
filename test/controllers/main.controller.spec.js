describe('mainController', function () {
    var $scope = {};

    beforeEach(module('app'));

    beforeEach(inject(function ($controller) {
        $controller('mainController', { $scope: $scope });
    }));

    describe('closeAlert', function () {
        it('try to close an alert', function () {
            $scope.closeAlert();
        })
    })
    describe('showSuccessMessage', function () {
        it('try to show a success message', function () {
            $scope.showSuccessMessage();
        })
    })
    describe('showDangerMessage', function () {
        it('try to show a danger message', function () {
            $scope.showDangerMessage();
        })
    })
    describe('addAlert', function () {
        it('try to add an alert', function () {
            $scope.addAlert();
        })
    })
});