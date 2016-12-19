describe('homeController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var quizzesService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        quizzesService = {
            readQuizzes: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $controller('homeController', { $scope: $scope, quizzesService: quizzesService });
    }));

    describe('loadData', function () {
        it('try to load data', function () {
            $scope.loadData();
        })
    })
});