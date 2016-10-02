angular.module('app').
    service('votesService', ['firebaseFactory', '$firebaseArray', VotesService]);

function VotesService(firebaseFactory, $firebaseArray) {
    this.createVoteUser = function (user, voteUser) {
        var refVotesUser = firebaseFactory.refVotes.child(user);
        var arrayVotes = $firebaseArray(refVotesUser);

        return arrayVotes.$add(voteUser);
    }
}    