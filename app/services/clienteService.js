
app.factory('ServiceClient',function($http){
    
      var urlBase = "http://localhost:8080/";
      var dataFactory = {};
    
      dataFactory.getCliente = function(){
        return $http.get( urlBase + "cliente/pf");
      }

      dataFactory.saveCliente = function(cliente){
        return $http.post( urlBase + "cliente/pf", cliente );
      }
    
        return dataFactory;
    
    })