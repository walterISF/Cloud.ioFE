app.controller('cadastroClienteController', ['$scope', '$http', 'ServiceClient', '$modal', function($scope, $http, ServiceClient,  $modal){

    $scope.cliente = {};
    $scope.cliente.enderecoList = [];
    $scope.cliente.telefoneList = [];
    $scope.cliente.cartaoDeCreditoList = [];

    var cliente;
    $scope.save = function()
    {

        // var modalInstance = $modal.open({
        //     templateUrl: 'app/view/modal.html',
        //     controller: 'cadastroClienteController',
        //     resolve: {
        //       items: function () {
        //         return $scope.items;
        //       }
        //     }
        //   });
        
        //   modalInstance.result.then(function (selectedItem) {
        //     $scope.selected = selectedItem;
        //   }, function () {
        //     $log.info('Modal dismissed at: ' + new Date());
        //   });
        // $scope.cliente.status = "ATIVO";
        // $scope.cliente.nomeCliente = $scope.cliente.nomeCliente + " " + $scope.cliente.sobrenomeCliente;

        // ServiceClient.saveCliente($scope.cliente).then(function(response)
        // {
        //     console.log(response);
        // }, 
        // function(erro)
        // {
        //     console.log(erro);
        // });
    }

}]);