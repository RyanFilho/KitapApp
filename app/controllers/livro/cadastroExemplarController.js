'use strict';
app.controller('cadastroExemplarController', ['$scope', 'googleBookService', 'livroService', function ($scope, googleBookService, livroService) {
	$scope.livro = {
		imagemLink: 'content/imagens/defaultbook.png',
		isbn: ['', ''],
		titulo: '',
		autores: '',
		paginas: '',
		publicacao: '',
		editora:'',
		descricao:'',
		categoriaID:'',
	};
	//Variavel para identificar se o livro já existe
	$scope.existente = false;
	$scope.procurarDados = function (isbn) {
		
		googleBookService.getBook(isbn, function (livroBack) {			
			$scope.livro = livroBack;	
		});

	}

	$scope.cadastrarLivro = function (livro) {

	}

}]);