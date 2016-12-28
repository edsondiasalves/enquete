describe('loginController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var authService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        authService = {
            onAuthStateChanged: function () {
                deferred = $q.defer();

                deferred.resolve({
                    firebaseUser:function(){}
                });
                return deferred.promise;
            },
            signOut: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            },
            signInWithEmailAndPassword: function () {

            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $controller('loginController', { $scope: $scope, authService: authService });
    }));

    describe('signOut', function () {
        it('try to sign an user out', function () {
            $scope.signOut();
        })
    })

    describe('onAuthStateChanged', function () {
        it('set control information when the auth state changes', function () {
            $scope.onAuthStateChanged();
            $scope.$apply();
        })
    })

    describe('signInWithEmailAndPassword', function () {
        it('sign an user in using email and password', function () {
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'password';
            $scope.$parent.showSuccessMessage = function () { };
            $scope.frmLogin = {
                $setPristine: function () { }
            };

            spyOn(authService, 'signInWithEmailAndPassword').and.callFake(function () {
                deferred.resolve({});
                return deferred.promise;
            });

            $scope.signInWithEmailAndPassword();
            $scope.$apply();
        })
    })

    describe('signInWithEmailAndPassword', function () {
        it('get an auth/wrong-password error when trying to sign an user in using email and password', function () {
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'password';
            $scope.$parent.showSuccessMessage = function () { };

            spyOn(authService, 'signInWithEmailAndPassword').and.callFake(function () {
                return Promise.reject({ code: 'auth/wrong-password' });
            });

            $scope.signInWithEmailAndPassword();
            $scope.$apply();
        })
    })

    describe('signInWithEmailAndPassword', function () {
        it('get an auth/user-not-found error when trying to sign an user in using email and password', function () {
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'password';
            $scope.$parent.showSuccessMessage = function () { };

            spyOn(authService, 'signInWithEmailAndPassword').and.callFake(function () {
                return Promise.reject({ code: 'auth/user-not-found' });
            });

            $scope.signInWithEmailAndPassword();
            $scope.$apply();
        })
    })
});