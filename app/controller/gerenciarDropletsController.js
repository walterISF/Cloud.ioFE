app.controller('gerenciarDropletsController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl){

    $scope.droplets = 
    [
        {
            title: 'Batata',
            description: 'Pao de Batata',
            dataCriacao: new Date('2013' , '08', '12'),
            dataVencimento: new Date('2013' , '12', '08')
        },
        {
            title: 'Batata2',
            description: 'Pao de Batata2',
            dataCriacao: new Date('2013' , '08', '12'),
            dataVencimento: new Date('2013' , '12', '08')
        }
            
    ]

}]);