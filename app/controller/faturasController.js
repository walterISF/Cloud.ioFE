app.controller('faturasController', function($scope, $http, ServiceFatura)
{
    $scope.faturas;
    
    ServiceFatura.getFatura( function(data) {
        $scope.faturas = data.data;
        console.log($scope.faturas);
    }, function(erro){
        console.log(erro);
    });
    
// $scope.faturas = 
//     [
//         {
//         	id: 12536489,
//             description: 'Outubro/2017',
//             valor: 'R$234,56',
//             dataVencimento: new Date('2013' , '11', '12'),
//             status: 'Paga'
//         },
//         {
//         	id: 12536489,
//             description: 'Outubro/2017',
//             valor: 'R$234,56',
//             dataVencimento: new Date('2013' , '11', '12'),
//             status: 'Paga'
//         },
//         {
//         	id: 12536489,
//             description: 'Outubro/2017',
//             valor: 'R$234,56',
//             dataVencimento: new Date('2013' , '11', '12'),
//             status: 'Paga'
//         },
//         {
//         	id: 12536489,
//             description: 'Outubro/2017',
//             valor: 'R$234,56',
//             dataVencimento: new Date('2013' , '11', '12'),
//             status: 'Paga'
//         },
//         {
//         	id: 12536489,
//             description: 'Outubro/2017',
//             valor: 'R$234,56',
//             dataVencimento: new Date('2013' , '11', '12'),
//             status: 'Paga'
//         }
            
//     ]

    // $scope.openModal = function(dados)
    // {
    //     $("#mdMensagem").modal("show");
    //     console.log(dados);
    // }


});

	