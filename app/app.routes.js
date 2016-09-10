angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
        });
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'views/create.html'
            })
    });