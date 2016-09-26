angular.module('app')
    .controller('createController', ['$scope', 'firebaseFactory', CreateController]);

function CreateController($scope, firebaseFactory) {
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
            var enquetes = firebaseFactory.enquetesLista;
            var novaEnquete =
                {
                    "title": $scope.quiz.title,
                    "description": $scope.quiz.description,
                    "options": []
                };

            angular.forEach($scope.quiz.options, function (v) {
                novaEnquete.options.push(v.desc)
            });

            enquetes.$add(novaEnquete).then(function (ref) {
                $scope.frmQuiz.$setPristine();

                $scope.quiz = {
                    options: [
                        { id: 1, desc: "" },
                        { id: 2, desc: "" }
                    ]
                };
            });
        }
    }
}