(function () {
    angular.module('app').
        factory('modalFactory', ['$uibModal', ModalFactory]);

    function ModalFactory($uibModal) {
        var open = function (templateUrl, controller, data) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: templateUrl,
                controller: controller,
                controllerAs: 'modal',
                resolve: {
                    quiz: function () {
                        return data;
                    }
                }
            });
            return modalInstance;
        }
        return {
            open: open
        }
    }
})();