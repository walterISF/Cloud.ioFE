app.controller('cadastrarDropletController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl){
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
            $('.btn-os').click(function(e) 
            {
                $('.btn-os').not(this).removeClass('active')
                    .siblings('input').prop('checked',false)
                    .siblings('.img-os').css('opacity','0.5');
                    
                $(this).addClass('active')
                    .siblings('input').prop('checked',true)
                    .siblings('.img-os').css('opacity','1');
            });
        });
    }
}]);




