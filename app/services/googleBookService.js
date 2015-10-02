app.factory('googleBookService', ['$http', function ($http) {
	googleBookServiceFactory = {};
	var _getBook = function (valor, successCallBack) {
		var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";				

		$http({method: 'GET', url:  (url + valor) })
			.success(function (data, status, headers, config) {
				console.log("Service recebe da googleapis : "); // Testes
				console.log(data);
				var dadosLivro = _validar(data);
				successCallBack(dadosLivro);

		});
	}

	var _validar = function (data) {
		dadosLivro = {};

		atributosGoogle = [
			'industryIdentifiers',
			'title',
			'imageLinks',
			'authors',
			'pageCount',
			'publishedDate'
		];

		atributosKitap = [
			'isbn',
			'titulo',
			'imagemLink',
			'autores',
			'paginas',
			'publicacao'
		];

		if (data.totalItems > 0) {
		 	dados = data.items[0].volumeInfo;
		}else {
			dados = {};
		}

		atributosGoogle.forEach(
			function (value, index) {
				if (value in dados) {
					if (atributosKitap[index] == 'autores')
					{
						dadosLivro.autores = dados[value].join(',');
					} 
					else if (atributosKitap[index] == 'isbn')
					{
						auxiliar = {};
						auxiliar.isbn = dados[value];
						dadosLivro.isbn = [auxiliar.isbn[0].identifier, auxiliar.isbn[1].identifier];
					}
					else if (atributosKitap[index] == 'imagemLink') 
					{
						dadosLivro.imagemLink = dados[value].thumbnail;
					}else 
					{
						dadosLivro[atributosKitap[index]] = dados[value];
					}			
				};
			}
		);	
		return dadosLivro;
	}

	googleBookServiceFactory.getBook = _getBook;

	return googleBookServiceFactory;

}]);