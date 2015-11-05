'use strict';
app.controller('cadastroLivroController', ['$scope', 'googleBookService', 'cadastroLivroService', function ($scope, googleBookService, cadastroLivroService) {
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
	$scope.procurarExistente = function (isbn) {
		googleBookService.getBook(isbn, function (livroBack) {
			$scope.livro = livroBack;	
		});
	}

	$scope.cadastrarLivro = function (livro) {
		var Cadastro = new cadastroLivroService();
		Cadastro.data = livro;
		console.log("cadastrado :" + livro);
		//Cadastro.save();
	}

}]);