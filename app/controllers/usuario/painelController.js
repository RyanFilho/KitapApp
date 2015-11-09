app.controller('painelController', ['$scope', '$resource', 'usuarioService', 'livroService', function ($scope, $resource, usuarioService, livroService) {
	usuarioService.exemplares(function(exemplares) {

		$scope.exemplares = exemplares;
		$scope.livros = [];

		exemplares.forEach(function (exemplar) {
			livroService.livroPorIsbn(exemplar.livro, function (livro) {
				if(!livro.imagemLink){
					livro.imagemLink = 'content/imagens/defaultbook.png';
				}
			 	$scope.livros.push(livro);
			});
		});
		
	});
}]);
