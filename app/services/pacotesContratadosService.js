
app.factory('ServicePacote', function($http, apiUrl, $cookies){
    var obj = {};
    
    obj.getPacote = function(callback, error){
        $http.get(apiUrl + "droplet/" + $cookies.getObject('cliente').cpf).then(callback, error);
    }
    return obj;
  });