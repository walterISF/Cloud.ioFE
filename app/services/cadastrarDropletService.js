
app.factory('ServiceDropletCadastro', ['$http' ,function($http){
    var obj = {};
    
    obj.getSistemaOperacional = function(callback, error){
        $http.get("http://localhost:8080/sistemaOperacional").then(callback, error);
    }

    obj.getDatacenter = function(callback, error){
        $http.get("http://localhost:8080/servidor").then(callback, error);
    }

    return obj;
}]);