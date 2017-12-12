
app.factory('ServiceClient',function($http, apiUrl){
    
  var obj = {};
  
  obj.saveClient = function(cliente, callback, error){
      $http.post(apiUrl + "cliente/pf", cliente).then(callback, error);
  }
  return obj;
    
})