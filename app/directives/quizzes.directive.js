(function () {
    angular.module('app')
        .directive('quizzesDirective', ['quizzesService', 'authService', 'votesService', 'modalFactory', QuizzesDirective]);

    function QuizzesDirective(quizzesService, authService, votesService, modalFactory) {
        return {
            restrict: 'AE',
            scope: {
                quizzes: '=ngModel'
            },
            templateUrl: 'views/quizzesDirective.html',
            link: function (scope) {
                scope.answer = function (selectedQuiz) {
                    var auth = authService.getAuth();
                    if (!auth) {
                        scope.handleError({ code: "PERMISSION_DENIED" });
                        return;
                    }

                    var modalInstance = modalFactory.open(
                        'views/vote.html',
                        'voteController',
                        selectedQuiz
                    );
                    //Callback user vote
                    modalInstance.result.then(function (vote) {
                        var userVoteQuiz = {
                            quizId: vote.quiz.$id,
                            selectedOption: vote.selectedOption
                        }
                        quizzesService.readQuizz(vote.quiz.$id).then(function (quizzesRef) {
                            var updatedQuiz = quizzesRef;
                            //Increment quiz total votes
                            updatedQuiz.votes =
                                scope.increaseValue(updatedQuiz.votes);

                            //Increment individual quiz option total votes
                            updatedQuiz.options[vote.selectedOption].votes =
                                scope.increaseValue(updatedQuiz.options[vote.selectedOption].votes);

                            //Add the vote to user info
                            votesService.createVoteUser(userVoteQuiz)
                                .then(function () {

                                    //Update quiz object
                                    quizzesService.updateQuizz(updatedQuiz)
                                        .then(function () {
                                            scope.$parent.showSuccessMessage('Voto computado com sucesso!');
                                        })
                                        .catch(function () {
                                        });
                                }).catch(function (ref) {
                                    scope.handleError(ref);
                                });
                        });
                    });
                }

                scope.delete = function (quiz) {
                    quizzesService.deleteQuiz(quiz);
                    scope.$parent.showSuccessMessage('Quiz excluído com sucesso!');
                }

                scope.handleError = function (ref) {
                    var msg = 'Um erro ocorreu tente mais tarde!'
                    if (ref.code === "PERMISSION_DENIED") {
                        msg = 'É necessário estar logado para opinar';
                    }
                    scope.$parent.showDangerMessage(msg);
                }

                scope.increaseValue = function (field) {
                    return (field == undefined ? 1 : field += 1);
                }
            }
        }
    }
})();