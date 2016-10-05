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
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'views/create.html',
                controller: 'createController'
            })
             .state('search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'searchController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/auth/login.html',
                controller: 'loginController'
            })
            .state('createUser', {
                url: '/createUser',
                templateUrl: 'views/auth/createUser.html',
                controller: 'createUserController'
            })
    });