app.controller('gerenciarDropletsController', ['$scope', '$http', 'ServiceDroplet', function($scope, $http, ServiceDroplet)
{

    ServiceDroplet.getDroplet(function(data)
    {   
        $scope.droplets = data.data;
        console.log(data.data);
    }, function(erro)
    {
        console.log(erro.data);
    });

}]);