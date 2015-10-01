app.factory('googleBookService', ['$http', function ($http) {
	googleBookServiceFactory = {};
	var _getBook = function (valor, successCallBack) {
		var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";				

		$http({method: 'GET', url:  (url + valor) })
			.success(function (data, status, headers, config) {
				var dadosLivro = _validador(data);
				successCallBack(dadosLivro);
		});
	}

	var _validador = function (data) {
		temp = {};
		dadosLivro = {};
		typeof data.items[0].volumeInfo != 'undefined' ? temp = data.items[0].volumeInfo : temp = null;
		typeof temp.industryIdentifiers != 'undefined'? dadosLivro.isbn = [temp.industryIdentifiers[0].identifier, temp.industryIdentifiers[1].identifier] : dadosLivro.isbn = null;
		typeof temp.title != 'undefined' ? dadosLivro.titulo = temp.title : dadosLivro.titulo = null;
		typeof temp.imageLinks.thumbnail != 'undefined'? dadosLivro.imagem = temp.imageLinks.thumbnail : dadosLivro.imagem = null;
		typeof temp.authors != 'undefined'? dadosLivro.autores = temp.authors.join(",") : dadosLivro.autores = null;
		typeof temp.pageCount != 'undefined'? dadosLivro.paginas = temp.pageCount : dadosLivro.paginas = null;
		typeof temp.publishedDate != 'undefined'? dadosLivro.publicacao = temp.publishedDate : dadosLivro.publicacao = null;
		return dadosLivro;
	}

	googleBookServiceFactory.getBook = _getBook;

	return googleBookServiceFactory;

}]);