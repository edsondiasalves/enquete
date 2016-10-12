angular.module('app').
    service('votesService', ['firebaseFactory', VotesService]);

function VotesService(firebaseFactory) {
    
    this.createVoteUser = function (userVoteQuiz) {
        //Navigate to firebase url: enquete/votes/{user}/{quiz}
        var refVotesUser = firebaseFactory.refVotes
            .child(userVoteQuiz.user)
            .child(userVoteQuiz.quizId);
        var arrayVotes = firebaseFactory.getArray(refVotesUser);

        var infoVote = {
            selectedOption: userVoteQuiz.selectedOption,
            date: new Date().toLocaleString()
        };

        return arrayVotes.$add(infoVote);
    }
}    