'use strict';
app.controller('searchController', ['$scope', '$routeParams', 'livroService', function ($scope, $routeParams, livroService) {
	var queryString = $routeParams.query;
	$scope.queryString = queryString;
	$scope.livros = [];

	var response = livroService.procurarLivro(queryString, function(livrosResultado){
		$scope.alert = "Nenhum livro encontrado";
		livrosResultado.forEach(function (livro) {
			
			if (livro) {
				if(!livro.imagemLink){
					livro.imagemLink = 'content/imagens/defaultbook.png';
				}
				$scope.livros.push(livro);
			};
		});	

	});


}]);