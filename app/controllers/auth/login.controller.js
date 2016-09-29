angular.module('app')
    .controller('loginController', ['$scope', 'firebaseFactory', LoginController]);

function LoginController($scope, firebaseFactory) {
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.login = function () {
        firebaseFactory.auth.$signInWithEmailAndPassword($scope.inputEmail, $scope.inputPassword).then(function (firebaseUser) {
            $scope.alerts = [{ type: 'success', msg: 'Usuário autenticado com sucesso' }];
            
            $scope.inputEmail = undefined;
            $scope.inputPassword = undefined;
            
            $scope.frmLogin.$setPristine();
        }).catch(function (error) {
            var msg = 'Não foi possível realizar a autenticação';
            console.log(error);
            if (error.code === 'auth/wrong-password')
                msg = 'A senha é inválida ou o usuário não possui uma senha.';
            else if (error.code === 'auth/user-not-found')
                msg = 'O usuário não existe ou a conta foi excluída';

            $scope.alerts = [{ type: 'danger', msg: msg }];
        });
    }
}