angular.module('app')
    .controller('voteController', ['$uibModalInstance', 'firebaseFactory', 'quiz', VoteController]);

function VoteController($uibModalInstance, firebaseFactory, quiz) {
    var vote = this;
    vote.quiz = quiz;
    vote.selectedOption = -1;

    vote.ok = function () {
        if (vote.selectedOption > -1) {
            $uibModalInstance.close(
                {
                    quizId: vote.quiz.id,
                    selectedOption: vote.selectedOption
                });
        }
    };

    vote.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}