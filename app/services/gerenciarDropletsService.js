
app.factory('ServiceDroplet', ['$http' ,function($http, apiUrl){
    var obj = {};
    
    obj.getDroplet = function(callback, error){
        $http.get(apiUrl + "droplet").then(callback, error);
    }
    return obj;
  }]);