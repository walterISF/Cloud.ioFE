app.controller('gerenciarDropletsController', ['$scope', '$http', 'ServiceDroplet', function($scope, $http, ServiceDroplet)
{

    callback = function(data){
        console.log(data);
    }
    error = function(data){
        console.log(data);
    }
    
    ServiceDroplet.getDroplet(callback, error);
    $scope.droplets = 
    [
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        },
        {
            title: 'ubuntu-512mb-ny3-01-teste',
            description: '512 GB / 20GB / NYC3 - Ubuntu 16.4.1 x64',
            enderecoIp: '45.55.82.243',
            dataCriacao: '2 anos atrás'
        }
            
    ]

}]);