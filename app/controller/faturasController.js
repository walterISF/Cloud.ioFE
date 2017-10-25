app.controller('faturasController', ['$scope', '$http', 'ServiceFatura', function($scope, $http, ServiceFatura)
{

    ServiceFatura.getDatabase()
    .then(function(data){
       console.log(data.data);
    })
    .catch(function(err){
        console.log(err);
    })
    
$scope.faturas = 
    [
        {
        	id: 12536489,
            description: 'Outubro/2017',
            valor: 'R$234,56',
            dataVencimento: new Date('2013' , '11', '12')
        },
        {
        	id: 12536489,
            description: 'Outubro/2017',
            valor: 'R$234,56',
            dataVencimento: new Date('2013' , '11', '12')
        },
        {
        	id: 12536489,
            description: 'Outubro/2017',
            valor: 'R$234,56',
            dataVencimento: new Date('2013' , '11', '12')
        },
        {
        	id: 12536489,
            description: 'Outubro/2017',
            valor: 'R$234,56',
            dataVencimento: new Date('2013' , '11', '12')
        },
        {
        	id: 12536489,
            description: 'Outubro/2017',
            valor: 'R$234,56',
            dataVencimento: new Date('2013' , '11', '12')
        }
            
    ]

    $scope.openModal = function(dados)
    {
        $("#mdMensagem").modal("show");
        console.log(dados);
    }


}]).factory('ServiceFatura',function($http){
    return {
       getDatabase: function(){
          return $http.get("https://api.coinmarketcap.com/v1/ticker/?limit=3");
       }
    };
  })

	