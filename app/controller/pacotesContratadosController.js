app.controller('pacotesContratadosController', function($scope, ServicePacote){
    
    $scope.dataCriacao = new Date('2013' , '08', '12');
    $scope.dataVencimento = new Date('2013' , '12', '08');

    ServicePacote.getPacote(function(data)
    {
        $scope.pacotes = data.data;
    }, 
    function(erro)
    {
        console.log(erro);
    })
});