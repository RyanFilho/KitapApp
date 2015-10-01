'use strict';
app.controller('cadastroLivroController', ['$scope', 'googleBookService', function ($scope, googleBookService) {
	$scope.livro = {
		imagem: 'content/imagens/defaultbook.png',
		isbn: [null, null],
		titulo: null,
		autores: null,
		publicacao: null
	};
	$scope.pegarLivro = function (isbn) {
		googleBookService.getBook(isbn, function (livroBack) {
			$scope.livro = livroBack;
			console.log(livroBack); // Testes
		});
	}

}]);