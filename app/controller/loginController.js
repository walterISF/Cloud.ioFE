app.controller('loginController', ['$scope', '$http', '$location', 'apiUrl', function($scope, $http, $location, apiUrl){
    $scope.login = function( path )
    {        
        $location.path('dashboard');
    }
}]);