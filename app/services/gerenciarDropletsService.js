
app.factory('ServiceDroplet', ['$http' ,function($http, apiUrl){
    var obj = {};
    
    obj.getDroplet = function(callback, error){
        $http.get(apiUrl + "servidor").then(callback, error);
    }
    return obj;
  }]);