angular.module('app').
    factory('firebaseFactory', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', FirebaseFactory]);

function FirebaseFactory($firebaseObject, $firebaseArray, $firebaseAuth) {
    var config = {
        apiKey: "AIzaSyCVHoMWUd2wx4Us9Cz2Zodu4DAhYu-V_Jw",
        authDomain: "enquete-ba752.firebaseapp.com",
        databaseURL: "https://enquete-ba752.firebaseio.com",
        storageBucket: "enquete-ba752.appspot.com",
        messagingSenderId: "856595882850"
    };
    firebase.initializeApp(config);

    var auth = $firebaseAuth();
    
    var refQuizzes = firebase.database().ref().child('enquetes').child('quizzes');
    var refVotes = firebase.database().ref().child('enquetes').child('votes');

    return {
        auth: auth,
        refQuizzes: refQuizzes, 
        refVotes: refVotes,
        getArray: function(ref){
            return $firebaseArray(ref);
        } ,
        getObject: function(ref){
            return $firebaseObject(ref);
        } 
    };
}    