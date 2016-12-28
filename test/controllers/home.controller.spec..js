describe('homeController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var quizzesService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        quizzesService = {
            readQuizzes: function () {

                deferred.resolve({});
                return deferred.promise;
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        deferred = $q.defer();
        
        $controller('homeController', { $scope: $scope, quizzesService: quizzesService });
    }));

    describe('loadData', function () {
        it('try to load data', function () {
            spyOn(quizzesService, 'readQuizzes').and.callFake(function () {
                deferred.resolve({});
                return deferred.promise;
            });

            $scope.loadData();
            $scope.$apply();

            expect(quizzesService.readQuizzes).toHaveBeenCalled();
        })
    })
});