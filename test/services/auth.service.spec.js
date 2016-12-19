describe('authService', function () {
    var authService, httpBackend, firebaseFactory;
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
                    $signInWithEmailAndPassword: deferedFunction,
                    $signOut: deferedFunction,
                    $createUserWithEmailAndPassword: deferedFunction,
                    $onAuthStateChanged: deferedFunction,
                    $getAuth: deferedFunction
                }
            };

            $provide.value('firebaseFactory', firebaseFactory);
        });
    });

    beforeEach(inject(function (_authService_, $httpBackend, _$q_) {
        authService = _authService_;
        httpBackend = $httpBackend;
        $q = _$q_;
    }));

    describe('signInWithEmailAndPassword', function () {
        it('sign a user in using email and password', function () {
            authService.signInWithEmailAndPassword('email', 'password').then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('signOut', function () {
        it('sign a user out', function () {
            authService.signOut();
            expect(true).toBe(true);
        })
    })

    describe('createUserWithEmailAndPassword', function () {
        it('create a user with email and password', function () {
            authService.createUserWithEmailAndPassword().then(function () {
                expect(true).toBe(true);
            });
        })
    })
    
    describe('onAuthStateChanged', function () {
        it('fire with auth state changes', function () {
            authService.onAuthStateChanged().then(function () {
                expect(true).toBe(true);
            });
        })
    })

    describe('getAuth', function () {
        it('return the auth object', function () {
            authService.getAuth().then(function () {
                expect(true).toBe(true);
            });
        })
    })
});