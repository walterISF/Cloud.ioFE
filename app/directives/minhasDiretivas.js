angular.module('MinhasDiretivas', [])
.directive('sistemaOperacional', function()
{
    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        so: '@',
        imagem: '@imagem',
        items: '='
    };
    ddo.templateUrl =  'app/directives/sistemaOperacional.html';
    return ddo;

})
.directive('datacenter', function()
{
    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        titulo: '@',
        imagem: '@imagem'
    };
    ddo.link =function (scope) {
        scope.test = function () {
            alert('Hello, world!');
        };
    }
    ddo.templateUrl =  'app/directives/regiaoDatacenter.html';
    return ddo;

})
.directive('plano', function(){
    
    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        item: '=',
        onButtonClick: '&'
    };
    ddo.link =function (scope) {
        scope.buttonClicked = function (item) {
            // Button was clicked in the directive
            // Invoke callback function on the controller
            console.log(item);
            scope.onButtonClick(item);
        };
    };
    ddo.templateUrl = "app/directives/plano.html";

    return ddo;
})
.directive('fatura', function(){
    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        item: '='
    };
    ddo.templateUrl = "app/directives/fatura.html";

    return ddo;
})