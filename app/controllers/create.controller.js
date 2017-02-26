(function () {

    angular.module('app')
        .controller('createController', ['$scope', 'quizzesService', CreateController]);

    function CreateController($scope, quizzesService) {
        $scope.quiz = {
            title: '',
            description: '',
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
            if ($scope.frmQuiz.$valid) {
                quizzesService.createQuiz($scope.quiz)
                    .then(function () {
                        $scope.$parent.showSuccessMessage('Enquete criada com sucesso!');
                        $scope.frmQuiz.$setPristine();

                        $scope.quiz = {
                            options: [
                                { id: 1, desc: "" },
                                { id: 2, desc: "" }
                            ]
                        };
                    }).catch(function (ref) {
                        if (ref.code === "PERMISSION_DENIED") {
                            $scope.$parent.showDangerMessage('É necessário estar logado para criar enquetes');
                        }
                    });
            }
        }
    }
})();