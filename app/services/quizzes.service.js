angular.module('app').
    service('quizzesService', ['firebaseFactory', QuizzesService]);

function QuizzesService(firebaseFactory, $firebaseArray) {
    this.createQuiz = function (quiz) {
        return firebaseFactory.arrayQuizzes.$add(quiz);
    }

    this.readQuiz = function () {
    }

    this.readQuizzes = function () {
        return firebaseFactory
            .arrayQuizzes
            .$loaded();
    }

    this.voteQuiz = function (quiz) {
        return firebaseFactory
            .arrayQuizzes
            .$save(quiz);
    }

    this.deleteQuiz = function () {
    }
}    