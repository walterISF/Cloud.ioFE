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
    ddo.templateUrl =  'app/directives/regiaoDatacenter.html';
    return ddo;

})
.directive('plano', function(){
    
    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        item: '='
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