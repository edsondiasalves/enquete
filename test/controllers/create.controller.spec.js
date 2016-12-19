describe('createController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var quizzesService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        quizzesService = {
            createQuiz: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $controller('createController', { $scope: $scope, quizzesService: quizzesService });
    }));


    describe('addOption', function () {
        it('try to add an option', function () {
            $scope.addOption();
        })
    })

    describe('removeOption', function () {
        it('try to remove an option', function () {
            $scope.removeOption();
        })
    })

    describe('create', function () {
        it('try to create an option', function () {
            $scope.frmQuiz = {
                $valid: true
            };
            $scope.create();
        })
    })
});