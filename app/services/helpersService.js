app.factory('helpersService', function () {
	var helpersServiceFactory = {};
	var _refatorarLivro = function (data) {
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

	helpersServiceFactory.refatorarLivro = _refatorarLivro;
	return helpersServiceFactory;

})