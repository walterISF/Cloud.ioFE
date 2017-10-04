app.factory('pcService', ['$http', function($http){
    $http.get("http://url_exemplo")
    .success(function(data){
        return data;
    })
    .error(function(err){
        return err;
    })
}])