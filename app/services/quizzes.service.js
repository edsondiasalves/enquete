angular.module('app').
    service('quizzesService', ['firebaseFactory', QuizzesService]);

function QuizzesService(firebaseFactory) {
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
            .equalTo(text)
            .limitToFirst(30);

        var myArrayQuizzes = firebaseFactory.getArray(ref);
        return myArrayQuizzes.$loaded();
    }

    this.readQuizz = function (id) {    
        var ref = firebaseFactory.refQuizzes.child(id);
        return firebaseFactory.getObject(ref).$loaded();
    }

    this.readQuizzes = function () {
        var ref = firebaseFactory.refQuizzes
            .orderByChild('votes')
            .limitToFirst(30);

        var myArrayQuizzes = firebaseFactory.getArray(ref);

        return myArrayQuizzes.$loaded();
    }

    this.updateQuizz = function(quiz){
        return quiz.$save();
    }

    this.deleteQuiz = function (quiz) {
        var refQuiz = firebaseFactory.refQuizzes.child(quiz.$id);
        
        var refUserExcludes = firebaseFactory.refExcludes.child(firebaseFactory.auth.$getAuth().uid);
        var arrayUserExcludes = firebaseFactory.getArray(refUserExcludes);
        
        arrayUserExcludes.$add(quiz.$id);
        refQuiz.remove();
    }
}