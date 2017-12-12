app.controller('minhaContaController', ['$scope', '$cookies', 'ServiceMinhaConta', '$location', function($scope, $cookies, ServiceMinhaConta, $location)
{

    $scope.client = $cookies.getObject('cliente');
    console.log($scope.client);
    $scope.nomeCliente;
    $scope.numeroCartao;

    $scope.salvar = function()
    {
        $scope.client.nomeCliente = $scope.nomeCliente;
        $scope.client.cartaoDeCreditoList.push(
            {
                numeroDeSeguranca:$scope.numeroSeguranca,
                numeroDoCartao: $scope.numeroCartao
            }
        );
        
        ServiceMinhaConta.saveClient($scope.client, function(data){
            console.log(data.data);
            if(data.data !== null && data.data !== '' && data.data !== undefined)
            {
                alert('cliente alterado com sucesso');
                $cookies.putObject('cliente', data.data);
                $scope.resetForm();
                $('#mdEditar').modal('hide');
            }
        }, function(erro){
            console.log(erro.data);
        })

    }

    $scope.open = function()
    {
        $('#mdEditar').modal('show');
    }

    $scope.resetForm = function ()
    {
        $('#formAlterClient').each(function(){
            this.reset();
        });
    };
}]);