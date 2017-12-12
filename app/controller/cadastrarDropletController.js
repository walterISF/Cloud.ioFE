app.controller('cadastrarDropletController', function($scope, $http, $cookies, ServiceDropletCadastro)
{

    $scope.sistemasOperacionais;
    $scope.datacenters;
    $scope.planos;
    $scope.sistSelected = [];
    
    ServiceDropletCadastro.getDatacenter( function(data) {
        $scope.datacenters = data.data;
        $scope.init();
    }, function(erro){
        console.log(erro);
    });

    ServiceDropletCadastro.getSistemaOperacional( function(data) {
        $scope.sistemasOperacionais = data.data;
        $scope.init();
    }, function(erro){
        console.log(erro);
    });
    
    ServiceDropletCadastro.getPlanos( function(data) {
        $scope.planos = data.data;
        $scope.init();
    }, function(erro){
        console.log(erro);
    });

    $scope.planoClick = function(item){
        $scope.planoClicked = item;
    }

    $scope.serverClick = function(item){
        $scope.datacenterClicked = item;
    }

    $scope.soClick = function(item){
        $scope.sistemasOperacionalClicked = item;
    }

    $scope.cadastro = function(){
        console.log($cookies.getObject('cliente'));
        $scope.droplet = 
        {
            nomeDroplet: $scope.nomeDroplet,
            sistemaOperacional: $scope.sistClicked,
            servidor: $scope.datacenterClicked,
            plano: $scope.planoClicked        
        }
        //console.log($scope.droplet);
        if($cookies.getObject('cliente') != '')
        {
            $scope.droplet.clientePessoaFisica = $cookies.getObject('cliente');
            ServiceDropletCadastro.postDroplet($scope.droplet, function(data) {
                console.log(data.data);
            }, function(erro){
                console.log(erro);
            });
        }
        else
        {
            console.log('sem cliente');
        }
    }

    $scope.changeSistOperacional = function(sistemaOp, value)
    {
        $scope.sistSelected[0] = value;
        $scope.sistClicked = 
        {        
            nomeSistemaOperacional: sistemaOp.nomeSistemaOperacional,       
            versaoSistemaOperacional: $scope.sistSelected,    
            caminhoIcone: sistemaOp.caminhoIcone
        }
    }


    $scope.init = function()
    {
        $(function () 
        {
            $('.btn-radio').click(function(e) 
            {
                $('.btn-radio').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-radio').css('opacity','0.5');

                $(this).addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-radio').css('opacity','1');
            });
        });

        $(function () 
        {
            $('.btn-plan').click(function(e) 
            {
                $('.btn-plan').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-plan').css('opacity','0.5');

                $(this).addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-plan').css('opacity','1');
            });
        });

        $(function () 
        {
            $('.btn-services').click(function(e) 
            {
                $('.btn-services').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-services').css('opacity','0.5');

                $(this).addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-services').css('opacity','1');
            });
        });

        $(function () 
        {
            $('.form_select_custom').on('change', function(e) 
            {
                $('.img-os').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-os').css('opacity','0.5');
                    $('.form_select_custom').not(this).removeClass('active');
                    
                $(this).parent().find(".selectImg").addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-os').css('opacity','1');
                $(this).addClass('active');
            });

            $(".selectImg").click(function(e) 
            {
                $('.img-os').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-os').css('opacity','0.5');
                    
                $(this).addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-os').css('opacity','1');
            });
        });
    };
});




