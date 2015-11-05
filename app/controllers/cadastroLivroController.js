'use strict';
app.controller('cadastroLivroController', ['$scope', 'googleBookService', function ($scope, googleBookService) {
	$scope.livro = {
		imagemLink: 'content/imagens/defaultbook.png',
		isbn: ['', ''],
		titulo: '',
		autores: '',
		paginas: '',
		publicacao: ''
	};
	$scope.procurarExistente = function (isbn) {
		googleBookService.getBook(isbn, function (livroBack) {
			$scope.livro = livroBack;	
		});
	}

}]);