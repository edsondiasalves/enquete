describe('createController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var quizzesService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        quizzesService = {
            createQuiz: function () {
            }
        };
    }));

    beforeEach(inject(function (_$rootScope_, _$q_, $controller) {
        $scope = _$rootScope_.$new();
        $scope.$parent.showSuccessMessage = function () { };
        $scope.$parent.showDangerMessage = function () { };
        
        $scope.frmQuiz = {
            $valid: true,
            $setPristine: function () { }
        };
        $scope.quiz = {};

        $q = _$q_;
        deferred = $q.defer();

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

            spyOn(quizzesService, 'createQuiz').and.callFake(function () {
                deferred.resolve({});
                return deferred.promise;
            });

            $scope.create();
            $scope.$apply();

            expect(quizzesService.createQuiz).toHaveBeenCalled();
            expect($scope.quiz.options.length).toBe(2);
        })
    })

    describe('create', function () {
        it('failing the creation of an option', function () {

            spyOn(quizzesService, 'createQuiz').and.callFake(function () {
                return  Promise.reject({code: "PERMISSION_DENIED"});
            });

            $scope.create();
            $scope.$apply();

            expect(quizzesService.createQuiz).toHaveBeenCalled();
        })
    })
});