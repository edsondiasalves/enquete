angular.module('app').
    service('quizzesService', ['firebaseFactory', QuizzesService]);

function QuizzesService(firebaseFactory) {
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

        //var newVote = {};
        //            newVote.user = firebaseFactory.auth.$userId;
        //newVote.quizId = selectedItem.quizId;
        //newVote.selectedOption = selectedItem.selectedOption;

        // firebaseFactory.votesArray.$add().then(function (ref) {
        //     $scope.alerts = [{ type: 'success', msg: 'Enquete criada com sucesso!' }];
        //     $scope.frmQuiz.$setPristine();
        // }).catch(function(ref){
        //     if (ref.code === "PERMISSION_DENIED"){
        //         $scope.alerts = [{ type: 'danger', msg: 'É necessário estar logado para opinar' }];
        //     }
        // });                
    }

    this.deleteQuiz = function () {

    }
}    