(function () {
    angular.module('app')
        .controller('loginController', ['$scope', 'authService', LoginController]);

    function LoginController($scope, authService) {
        $scope.signOut = function () {
            authService.signOut();
        }

        $scope.onAuthStateChanged = function () {
            authService.onAuthStateChanged(function (firebaseUser) {
                $scope.isAuthenticated = firebaseUser != null;
                $scope.$parent.user = firebaseUser;
            });
        }

        $scope.signInWithEmailAndPassword = function () {
            authService.signInWithEmailAndPassword($scope.inputEmail, $scope.inputPassword)
                .then(function () {
                    $scope.$parent.showSuccessMessage('Usuário autenticado com sucesso');

                    $scope.inputEmail = undefined;
                    $scope.inputPassword = undefined;

                    $scope.frmLogin.$setPristine();
                }).catch(function (error) {
                    var msg = 'Não foi possível realizar a autenticação';
                    if (error.code === 'auth/wrong-password')
                        msg = 'A senha é inválida ou o usuário não possui uma senha.';
                    else if (error.code === 'auth/user-not-found')
                        msg = 'O usuário não existe ou a conta foi excluída';

                    $scope.$parent.showDangerMessage(msg);
                });
        }

        $scope.onAuthStateChanged();
    }
})();