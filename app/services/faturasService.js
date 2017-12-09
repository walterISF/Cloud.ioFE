
app.factory('ServiceFatura',function($http, apiUrl){

  var dataFactory = {};

  dataFactory.getServer = function(){
    return $http.get( apiUrl + "servidor");
  }

    return dataFactory;

})



