app.controller('cadastroClienteController', ['$scope', '$http', 'ServiceClient', function($scope, $http, ServiceClient){

    $scope.cliente = {};
    $scope.cliente.enderecoList = [];
    $scope.cliente.telefoneList = [];
    $scope.cliente.cartaoDeCreditoList = [];
    var cliente;
    $scope.save = function()
    {

        $scope.cliente.status = "ATIVO";
        $scope.cliente.nomeCliente = $scope.cliente.nomeCliente + " " + $scope.cliente.sobrenomeCliente;
        cliente = angular.copy($scope.cliente);
        $scope.formCliente.$setPristine();
        ServiceClient.saveCliente($scope.cliente).then(function(response)
        {
            console.log(response);
        }, 
        function(erro)
        {
            console.log(erro);
        });
    }

}]);