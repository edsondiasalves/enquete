angular.module('app')
    .controller('homeController', ['$scope', HomeController]);

function HomeController($scope){
    var quiz = {
        "name":'Project Name',
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
        "image":"http://placehold.it/700x400"
    };

    var qtdQuizzes = 5;
    $scope.quizzes = [];

    for(i=0; i<qtdQuizzes; i++){
        $scope.quizzes.push(quiz);
    }
}