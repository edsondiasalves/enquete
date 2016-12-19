describe('searchController', function () {
    var $scope = {};
    var $q;
    var deferred;
    var quizzesService;

    beforeEach(module('app'));

    beforeEach(inject(function () {
        quizzesService = {
            searchQuizzes: function () {
                deferred = $q.defer();

                deferred.resolve({});
                return deferred.promise;
            }
        };
    }));

    beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $controller('searchController', { $scope: $scope, quizzesService: quizzesService });
    }));

    describe('search', function () {
        it('try to search data', function () {
            $scope.searchkey = 'abc';
            $scope.search();
        })
    })
});