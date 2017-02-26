(function(){
angular.module('app').
    service('authService', ['firebaseFactory', AuthService]);

function AuthService(firebaseFactory) {
    this.signInWithEmailAndPassword = function (email, password) {
        return firebaseFactory.auth.$signInWithEmailAndPassword(email, password);
    }

    this.signOut = function () {
        firebaseFactory.auth.$signOut();
    }

    this.createUserWithEmailAndPassword = function (email, password) {
        return firebaseFactory.auth.$createUserWithEmailAndPassword(email, password);
    }

    this.onAuthStateChanged = function(a){
        return firebaseFactory.auth.$onAuthStateChanged(a);
    }

    this.getAuth = function(){
        return firebaseFactory.auth.$getAuth();
    }
}
})();