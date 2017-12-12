
app.factory('ServiceMinhaConta', function($http, apiUrl, $cookies){
    var obj = {};
    
    obj.saveClient = function(cliente, callback, error){
        $http.put(apiUrl + "cliente/pf", cliente).then(callback, error);
    }
    return obj;
  });