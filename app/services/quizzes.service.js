angular.module('app').
    service('quizzesService', ['firebaseFactory', QuizzesService]);

function QuizzesService(firebaseFactory, $firebaseArray) {
    var arrayQuizzes = firebaseFactory.getArray(firebaseFactory.refQuizzes);

    this.createQuiz = function (quiz) {
        quiz.creationDate = new Date().toLocaleString();
        quiz.author = firebaseFactory.auth.$getAuth().uid;
        return arrayQuizzes.$add(quiz);
    }

    this.searchQuizzes = function (text) {
        if (!text)
            return null;

        var ref = firebaseFactory.refQuizzes
            .orderByChild('title')
            .startAt(text)
            .limitToFirst(30);

        var arrayQuizzes = firebaseFactory.getArray(ref);
        return arrayQuizzes.$loaded();
    }

    this.readQuizz = function (id) {    
        var ref = firebaseFactory.refQuizzes.child(id);
        return firebaseFactory.getObject(ref).$loaded();
    }

    this.readQuizzes = function () {
        return arrayQuizzes.$loaded();
    }

    this.updateQuizz = function(quiz){
        return quiz.$save();
    }

    this.deleteQuiz = function (quiz) {
    }
}