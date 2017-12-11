
app.factory('ServiceFatura', ['$http', 'apiUrl' ,function($http, apiUrl){

  var obj = {};

  obj.getFatura = function(callback, error){
    $http.get( apiUrl + "fatura/np/1").then(callback, error);
  }

  return obj;

}]);



