'use strict';
app.controller('searchController', ['$scope', '$location', '$routeParams', 'livroService', '$resource', 'helpersService' , function ($scope, $location, $routeParams, livroService, $resource, helpers) {
	var queryString = $routeParams.query;
	$scope.livros = [];

	var response = livroService.procurarLivro(queryString, function(livrosResultado){

		livrosResultado.forEach(function (livro) {

			if(!livro.imagemLink){
				livro.imagemLink = 'content/imagens/defaultbook.png';
			}

			$scope.livros.push(livro);

		});
		
		console.log($scope.livros);

	});


}]);