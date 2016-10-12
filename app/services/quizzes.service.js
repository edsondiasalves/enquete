angular.module('app').
    service('quizzesService', ['firebaseFactory', QuizzesService]);

function QuizzesService(firebaseFactory, $firebaseArray) {
    var arrayQuizzes = firebaseFactory.getArray(firebaseFactory.refQuizzes);

    this.createQuiz = function (quiz) {
        quiz.creationDate = new Date().toLocaleString();
        return arrayQuizzes.$add(quiz);
    }

    this.readQuiz = function (text) {
        if (!text)
            return null;
        
        return firebaseFactory.refQuizzes
            .orderByChild('title')
            .startAt(text)
            .limitToFirst(30)
            .once('value');
    }

    this.readQuizzes = function () {        
        return arrayQuizzes.$loaded();
    }

    this.voteQuiz = function (quiz) {
        return arrayQuizzes.$save(quiz);
    }

    this.deleteQuiz = function () {
    }
}    