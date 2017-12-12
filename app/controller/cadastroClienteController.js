app.controller('cadastroClienteController', ['$scope', '$http', 'ServiceClient', '$location', function($scope, $http, ServiceClient,  $location){

    $scope.cliente = {};
    $scope.cliente.enderecoList = [];
    $scope.cliente.telefoneList = [];
    $scope.cliente.cartaoDeCreditoList = [];

    var cliente;
    $scope.save = function()
    {

        $scope.cliente.status = "ATIVO";
        $scope.cliente.nomeCliente = $scope.cliente.nomeCliente + " " + $scope.cliente.sobrenomeCliente;

        ServiceClient.saveClient($scope.cliente, function(data){
            console.log(data.data);
            $scope.resetForm();
            $location.path('');
        }, function(erro){
            console.log(erro.data);
        });
    }

    $scope.resetForm = function ()
    {
        $('#formularioCliente').each(function(){
            this.reset();
        });
    };

}]);