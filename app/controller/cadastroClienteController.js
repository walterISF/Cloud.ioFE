app.controller('cadastroClienteController', ['$scope', '$http', 'ServiceClient', function($scope, $http, ServiceClient){

    $scope.cliente = {};
    $scope.cliente.enderecoList = [];
    $scope.cliente.telefoneList = [];
    $scope.cliente.cartaoDeCreditoList = [];
    $scope.save = function()
    {
        $scope.cliente.status = "ATIVO";
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