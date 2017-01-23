describe('votesService', function () {
    var votesService, httpBackend, firebaseFactory;
    var $q, deferred;

    beforeEach(module('app'));

    var deferedFunction = function () {
        deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
    }

    beforeEach(function () {
        module(function ($provide) {
            firebaseFactory = {
                auth: {
                    $getAuth: deferedFunction
                },
                getArray: function () {
                    return {
                        uid: {},
                        $add: deferedFunction
                    };
                },
                refVotes: {
                    child: function (id) {
                        return {
                            child: function (id) {
                                return {
                                    limitToFirst: function () { }
                                }
                            }
                        }
                    }
                }
            };

            $provide.value('firebaseFactory', firebaseFactory);
        });
    });

    beforeEach(inject(function (_votesService_, $httpBackend, _$q_) {
        votesService = _votesService_;
        httpBackend = $httpBackend;
        $q = _$q_;
    }));

    describe('createVoteUser', function () {
        it('create a user vote', function () {
            votesService.createVoteUser({}).then(function () {
                expect(true).toBe(true);
            });
        })
    })
});