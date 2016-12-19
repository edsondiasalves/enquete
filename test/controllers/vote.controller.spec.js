describe('voteController', function () {
    var $scope = {};
    var controller;
    var $uibModalInstance = {
        dismiss: function(){},
        close: function(){}
    };
    var quiz = {};

    beforeEach(module('app'));

    beforeEach(inject(function ($controller) {
        controller = $controller('voteController', { $scope: $scope, $uibModalInstance: $uibModalInstance, quiz: quiz });
    }));

    describe('ok', function () {
        it('try to call the ok method', function () {
            controller.selectedOption = 2;
            controller.ok();
        })
    })

    describe('cancel', function () {
        it('try to call the cancel method', function () {
            controller.cancel();
        })
    })
});