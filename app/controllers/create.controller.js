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

    // $scope.alerts = [
    //     { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    //     { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    // ];

    $scope.addAlert = function () {
        $scope.alerts.push({ msg: 'Another alert!' });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
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
                $scope.alerts = [{ type:'success', msg: 'Enquete criada com sucesso!' }];
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