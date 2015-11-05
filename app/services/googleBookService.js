app.factory('googleBookService', ['$http', '$resource', function ($http, $resource) {
	googleBookServiceFactory = {};


	var _getBook = function (valor, successCallBack) {
		var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";	
		valor = _validarString(valor);

		if (valor) {
			resource = $resource('https://www.googleapis.com/books/v1/:resourceQuery');
			// GET 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
			successCallback(resource.get({resourceQuery:'volumes', q:'isbn:' + valor}));
			
		}else
			successCallBack('');
		
	}


	var _validarString = function (string) {
		if(string){
			var novaString = string.replace(/-/g, '');
			if (novaString.length == 10 || novaString.length == 13){	
				return novaString;
			}
			else{
				return null;
			}
		}else{
			return null;
		}
		
	}

	var _validarResponse = function (data) {
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
						if (auxiliar.isbn[0].type == 'ISBN_10') {
							dadosLivro.isbn = [auxiliar.isbn[0].identifier, auxiliar.isbn[1].identifier];
						} else{
							dadosLivro.isbn = [auxiliar.isbn[1].identifier, auxiliar.isbn[0].identifier];
						};
						
					}
					else if (atributosKitap[index] == 'imagemLink') 
					{
						dadosLivro.imagemLink = dados[value].thumbnail;
					}else 
					{
						dadosLivro[atributosKitap[index]] = dados[value];
					}			
				}else {
					if (atributosKitap[index] == 'imagemLink')
					{
						dadosLivro.imagemLink = 'content/imagens/defaultbook.png';
					}else {
						dadosLivro[atributosKitap[index]] = '';
					}
					
				};
			}
		);	
		return dadosLivro;
	}

	googleBookServiceFactory.getBook = _getBook;

	return googleBookServiceFactory;

}]);