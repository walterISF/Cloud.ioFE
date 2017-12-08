angular.module('MinhasDiretivas', [])
.directive('sistemaOperacional', function()
{
    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        so: '@',
        imagem: '@imagem'
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

});