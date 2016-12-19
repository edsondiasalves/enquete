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

                deferred.resolve({});
                return deferred.promise;
            },
            signOut: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            },
            signInWithEmailAndPassword: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
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
        })
    })

    describe('signInWithEmailAndPassword', function () {
        it('sign an user in using email and password', function () {
            $scope.signInWithEmailAndPassword();
        })
    })
});