describe('quizzesService', function () {
    var quizzesService, httpBackend, firebaseFactory;
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
                        $add: deferedFunction,
                        $loaded: deferedFunction
                    };
                },
                refQuizzes: {
                    orderByChild: function (text) {
                        return {
                            equalTo: function (text) {
                                return {
                                    limitToFirst: function () { }
                                }
                            },
                            limitToFirst: function () { }
                        }
                    },
                    child: function (id) {
                        return { remove: function () { } }
                    }
                },
                refExcludes: {
                    child: function () { }
                },
                getObject: function () {
                    return { $loaded: deferedFunction }
                }
            };

            $provide.value('firebaseFactory', firebaseFactory);
        });
    });

    beforeEach(inject(function (_quizzesService_, $httpBackend, _$q_) {
        quizzesService = _quizzesService_;
        httpBackend = $httpBackend;
        $q = _$q_;
    }));

    describe('createQuiz', function () {
        it('create a new Quiz', function () {
            quizzesService.createQuiz('newQuiz').then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('searchQuizzes', function () {
        it('search a quiz', function () {
            quizzesService.searchQuizzes('text').then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('searchQuizzes', function () {
        it('try to search a quiz without any parameteres', function () {
            quizzesService.searchQuizzes();
            expect(true).toBe(true);
        })
    })

    describe('readQuizz', function () {
        it('read a quiz', function () {
            quizzesService.readQuizz('text').then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('readQuizzes', function () {
        it('read many quizzes', function () {
            quizzesService.readQuizzes('text').then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('updateQuizz', function () {
        it('update a quiz', function () {
            quizzesService.updateQuizz({ $save: deferedFunction }).then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('deleteQuizQuizz', function () {
        it('deleteQuiz a quiz', function () {
            quizzesService.deleteQuiz({ $id: {} });
            expect(true).toBe(true);
        })
    })
});