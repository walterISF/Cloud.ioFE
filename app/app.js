var app = angular.module('app', ['ngRoute']);

app.value('apiUrl', 'http://localhost:8080');

app.config(function($routeProvider, $httpProvider){

    $routeProvider
        .when('/', {
            templateUrl:'app/view/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/gerenciarDroplets', {
            templateUrl:'app/view/gerenciarDroplets.html',
            controller: 'gerenciarDropletsController'
        })
        .when('/monitoramento', {
            templateUrl:'app/view/monitoramento.html',
            controller: 'monitoramentoController'
        })
        .when('/pacotesContratados', {
            templateUrl:'app/view/pacotesContratados.html',
            controller: 'pacotesContratadosController'
        })
        .when('/faturas', {
            templateUrl:'app/view/faturas.html',
            controller: 'faturasController'
        })
        .when('/ajuda', {
            templateUrl:'app/view/ajuda.html',
            controller: 'ajudaController'
        })
        .otherwise({
            templateUrl: 'app/view/404.html'
        });
});

app.run(function(){
    console.log("run");
});