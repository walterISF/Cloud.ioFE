app.controller('loginController',function($scope, ServiceLogin, $location, $cookies){

    $scope.sigin = function()
    {
        $scope.login = {
            email: $scope.email,
            senha: $scope.password
        };

        ServiceLogin.getClient($scope.login, function(client)
        {
            console.log(client.data);
            if(client.data !== '' && client.data !== null && client.data !== undefined)
            {
                $cookies.putObject('cliente', client.data);
                $location.path('dashboard');

            }
        },
        function(erro){
            if(erro.status == '500')
            {
                alert('insira um email valido');
            }
        });
    }
});