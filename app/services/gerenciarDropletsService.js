
app.factory('ServiceDroplet', function($http, apiUrl, $cookies){
    var obj = {};
    
    obj.getDroplet = function(callback, error){
        $http.get(apiUrl + "droplet/" + $cookies.getObject('cliente').cpf).then(callback, error);
    }
    return obj;
  });