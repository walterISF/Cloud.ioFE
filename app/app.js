var app = angular.module('app', ['ngRoute', 'ui.mask', 'ui.bootstrap', 'MinhasDiretivas']);

app.value('apiUrl', 'http://localhost:8080/');

app.config(function($routeProvider, $httpProvider, $locationProvider){

    $routeProvider
        .when('/', {
            templateUrl:'app/view/login.html',
            controller: 'loginController'
        })
        .when('/dashboard', {
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
        .when('/cadastrarDroplet', {
            templateUrl:'app/view/cadastrarDroplet.html',
            controller: 'cadastrarDropletController'
        })
        .when('/minhaConta', {
            templateUrl:'app/view/minhaConta.html',
            controller: 'minhaContaController'
        })
        .when('/configuracoes', {
            templateUrl:'app/view/configuracoes.html',
            controller: 'configuracoesController'
        })
        .when('/cadastroCliente', {
            templateUrl:'app/view/cadastroCliente.html',
            controller: 'cadastroClienteController'
        })
        .when('/institucional', {
            templateUrl:'app/view/institucional.html',
            controller: 'institucionalController.html'
        })
        .otherwise({
            templateUrl: 'app/view/404.html'
        });

        $locationProvider.html5Mode(true);
});

app.run(function(){
    console.log("run");
});