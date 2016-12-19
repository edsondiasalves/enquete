describe('createUserController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var authService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        authService = {
            createUserWithEmailAndPassword2: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $controller('createUserController', { $scope: $scope, authService: authService });
    }));

    describe('create', function () {
        it('try to create an user', function () {
            $scope.frmCreateUser = {
                valid: true,
                inputPassword:'equal',
                inputConfirm:'equal'
            };
            $scope.create();
        })
    })
});