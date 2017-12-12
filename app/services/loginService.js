app.factory('ServiceLogin', function($http, apiUrl){

    var obj = {};

    obj.getClient = function(login, callback, error){
        $http.post(apiUrl + "login", login).then(callback, error);
    }
    return obj;

});