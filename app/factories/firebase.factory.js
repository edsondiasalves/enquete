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
    var refData = firebase.database().ref();
    var refEnquetes = firebase.database().ref().child('enquetes').child('quizzes');

    var data = $firebaseObject(refData);
    var dataLista = $firebaseArray(refData);
    var enquetes = $firebaseObject(refEnquetes);
    var enquetesLista = $firebaseArray(refEnquetes);

    return {
        dataLista: dataLista,
        enquetes: enquetes,
        enquetesLista: enquetesLista, 
        auth: auth
    };
}    