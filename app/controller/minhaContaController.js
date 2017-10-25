app.controller('minhaContaController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl){
    

$scope.client = 
	{

		nome: 'Lucas Stein',
		cpf:'416.543.628.32',
		data_aniversario:'23/04/1996',
		endereco:
	            {
	                logradouro: 'Rua Um',
	                numero: '12',
	                bairro:'Jd Floras',
	                codigo_postal:'13172-754',
	                cidade:'Americana',
	                pais:'Brasil',
	                estado:'SP'
	            },
	    email:'lucas@gmail.com',
	    dados_pagamento:
	    		{
	    			numero_cartao:'4544 444 444 2333',
	    			final_cartao:'2333',
	    			validade_cartao:'04/20',
	    			bandeira:'Mastercard'

	    		},


	}
}]);