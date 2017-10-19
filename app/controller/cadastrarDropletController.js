app.controller('cadastrarDropletController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl)
{
    $scope.plans = [
        
            {        
                productsForPlan:
                [
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    }
                ],
                service: 
                {
                    serviceName: "Nome do Servico",
                    price: 10.00
        
                }        
            },
            {        
                productsForPlan:
                [
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    },
                    {
                        productName: "8GB Memory",
                        description: "8GB RAM Memory",
                        idCategory: 1
                    }
                ],
                service: 
                {
                    serviceName: "Nome do Servico",
                    price: 10.00
        
                }        
            }
        
        ]
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
    }

}]);




