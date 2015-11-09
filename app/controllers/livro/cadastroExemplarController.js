'use strict';
app.controller('cadastroExemplarController', ['$scope', 'googleBookService', 'livroService', function ($scope, googleBookService, livroService) {

	//Variavel para identificar se o livro já existe
	$scope.existente = true;

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

	$scope.procurarDados = function (isbn) {
		
		livroService.procurarLivro(isbn, function (livroBack) {

			if (livroBack) {
				$scope.existente = true;
			}else{
				$scope.existente = false;
				googleBookService.getBook(isbn, function (livroBack) {			
					$scope.livro = livroBack;	
				});

			};
			
		});
	}

	$scope.cadastrarLivro = function (livro) {

	}

}]);