app.controller('faturasController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl)
{
    
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

    $(document).ready(function(){
    $(".btn").click(function(){
        $("#modal-mensagem").modal('show');
    });
});


}]);

	