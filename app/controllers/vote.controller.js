angular.module('app')
    .controller('voteController', ['$uibModalInstance', 'quiz', VoteController]);

function VoteController($uibModalInstance, quiz) {
    var vote = this;
    vote.quiz = quiz;
    vote.selectedOption = -1;

    vote.ok = function () {
        if (vote.selectedOption > -1) {
            $uibModalInstance.close({
                quiz: vote.quiz,
                selectedOption: vote.selectedOption
            });
        }
    };

    vote.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}