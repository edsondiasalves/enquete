describe('createUserController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var authService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        authService = {
            createUserWithEmailAndPassword: function (a, b) {
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        deferred = $q.defer();
        $controller('createUserController', { $scope: $scope, authService: authService });
    }));

    describe('create', function () {
        it('setting differente passwords', function () {
            $scope.inputPassword = 'equal';
            $scope.inputConfirm = 'different';

            $scope.$parent.showDangerMessage = function () { };
            $scope.create();
        })
    })

    describe('create', function () {
        it('try to create an user', function () {
            $scope.frmCreateUser = {
                $valid: true,
                $setPristine: function () { }
            };
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'equal';
            $scope.inputConfirm = 'equal';

            $scope.$parent.showSuccessMessage = function (a) { };

            spyOn(authService, 'createUserWithEmailAndPassword').and.callFake(function () {
                deferred.resolve({});
                return deferred.promise;
            });

            $scope.create();
            $scope.$apply();
        })
    })

    describe('create', function () {
        it('failing with email-already-in-use error', function () {
            $scope.frmCreateUser = {
                $valid: true,
                $setPristine: function () { }
            };
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'equal';
            $scope.inputConfirm = 'equal';

            $scope.$parent.showSuccessMessage = function (a) { };

            spyOn(authService, 'createUserWithEmailAndPassword').and.callFake(function () {
                return Promise.reject({ code: 'auth/email-already-in-use' });
            });

            $scope.create();
            $scope.$apply();
        })
    })

    describe('create', function () {
        it('failing with auth/operation-not-allowed error', function () {
            $scope.frmCreateUser = {
                $valid: true,
                $setPristine: function () { }
            };
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'equal';
            $scope.inputConfirm = 'equal';

            $scope.$parent.showSuccessMessage = function (a) { };

            spyOn(authService, 'createUserWithEmailAndPassword').and.callFake(function () {
                return Promise.reject({ code: 'auth/operation-not-allowed' });
            });

            $scope.create();
            $scope.$apply();
        })
    })

    describe('create', function () {
        it('failing with auth/too-many-requests', function () {
            $scope.frmCreateUser = {
                $valid: true,
                $setPristine: function () { }
            };
            $scope.inputEmail = 'a@b.com';
            $scope.inputPassword = 'equal';
            $scope.inputConfirm = 'equal';

            $scope.$parent.showSuccessMessage = function (a) { };

            spyOn(authService, 'createUserWithEmailAndPassword').and.callFake(function () {
                return Promise.reject({ code: 'auth/too-many-requests' });
            });

            $scope.create();
            $scope.$apply();
        })
    })
});