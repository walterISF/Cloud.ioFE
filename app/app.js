var app = angular.module('app', ['ngRoute']);

app.value('apiUrl', 'http://localhost:8080');

app.config(function($routeProvider, $httpProvider){

    $routeProvider
        .when('/', {
            templateUrl:'app/view/home.html',
            controller: 'homeController'
        })
        .when('/features', {
            templateUrl:'app/view/features.html',
            controller: 'featuresController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function(){
    console.log("run");
});