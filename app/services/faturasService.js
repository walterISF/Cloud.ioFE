
app.factory('ServiceFatura',function($http){
  return {
     getDatabase: function(){
        return $http.get("https://api.coinmarketcap.com/v1/ticker/?limit=3");
     }
  };
})



