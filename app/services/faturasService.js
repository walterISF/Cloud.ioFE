
app.factory('ServiceFatura',function($http){

  var urlBase = "http://localhost:8080/";
  var dataFactory = {};

  dataFactory.getServer = function(){
    return $http.get( urlBase + "servidor");
  }

    return dataFactory;

})



