
app.factory('ServiceDroplet', ['$http' ,function($http){
    var obj = {};
    
    obj.getDroplet = function(callback, error){
        $http.get("http://localhost:8080/servidor").then(callback, error);
    }
    return obj;
  }]);