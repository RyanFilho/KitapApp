'use strict';
app.controller('cadastroLivroController', ['$scope', 'googleBookService', function ($scope, googleBookService) {
	$scope.livro = {
		imagemLink: 'content/imagens/defaultbook.png',
		isbn: [null, null],
		titulo: null,
		autores: null,
		paginas: null,
		publicacao: null
	};
	$scope.pegarLivro = function (isbn) {
		googleBookService.getBook(isbn, function (livroBack) {
			console.log("Controller recebe da service :"); // Testes
			console.log(livroBack);
			$scope.livro = livroBack;	

		});
	}

}]);