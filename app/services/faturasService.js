
app.factory('ServiceFatura', ['$http', 'apiUrl', '$cookies' ,function($http, apiUrl, $cookies){

  var obj = {};

  obj.getFatura = function(callback, error)
  {
    $http.get( apiUrl + "fatura/np/" + $cookies.getObject('cliente').cpf).then(callback, error);
  }

  return obj;

}]);



