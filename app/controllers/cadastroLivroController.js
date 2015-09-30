'use strict';
app.controller('cadastroLivroController', ['$scope', 'googleBookService', function ($scope, googleBookService) {
	

	$scope.pegarLivro = function (isbn) {
		googleBookService.getBook(isbn, function (livroBack) {
			$scope.livro = livroBack;
			console.log(livroBack);
		});
	}

}]);