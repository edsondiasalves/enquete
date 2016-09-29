angular.module('app')
    .controller('createUserController', ['$scope', 'firebaseFactory', CreateUserController]);

function CreateUserController($scope, firebaseFactory) {
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.create = function () {

        if ($scope.inputPassword !== $scope.inputConfirm) {
            $scope.alerts = [{ type: 'danger', msg: 'As senhas não são iguais' }];
            return;
        }

        if ($scope.frmCreateUser.$valid) {
            firebaseFactory.auth.$createUserWithEmailAndPassword($scope.inputEmail, $scope.inputPassword)
                .then(function (firebaseUser) {
                    $scope.alerts = [{ type: 'success', msg: 'Usuário ' + $scope.inputEmail + ' criado com sucesso!' }];
                    
                    $scope.inputEmail = undefined;
                    $scope.inputPassword = undefined;
                    $scope.inputConfirm = undefined;
                    $scope.frmCreateUser.$setPristine();
                }).catch(function (error) {
                    var msg = 'Não foi possível criar o usuário';
                    console.log(error);
                    if (error.code === 'auth/email-already-in-use')
                        msg = 'O endereço de e-mail já está sendo utilizado.';
                    else if (error.code === 'auth/operation-not-allowed')
                        msg = 'O provedor de login está desabilitado. Contate o administrador do sistema';
                    else if (error.code === 'auth/too-many-requests')
                        msg = 'Número de tentativas de criação de usuário excedidas. Tente mais tarde';

                    $scope.alerts = [{ type: 'danger', msg: msg }];
                });
        }
    }
}