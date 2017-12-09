
app.factory('ServiceDropletCadastro', ['$http', 'apiUrl' ,function($http, apiUrl){
    var obj = {};
    
    obj.getSistemaOperacional = function(callback, error){
        $http.get(apiUrl + "sistemaOperacional").then(callback, error);
    }

    obj.getDatacenter = function(callback, error){
        $http.get(apiUrl + "servidor").then(callback, error);
    }

    obj.getPlanos = function(callback, error){
        $http.get(apiUrl + "plano").then(callback, error);
    }

    return obj;
}]);