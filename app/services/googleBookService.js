app.factory('googleBookService', ['$http', function ($http) {

	return {
		getBook: function (valor, successcb) {
			var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";				

			$http({method: 'GET', url:  (url + valor) }).
				success(function (data, status, headers, config) {
					var temp = data.items[0].volumeInfo;
					info = {
						isbn: [temp.industryIdentifiers[0], temp.industryIdentifiers[1]],
						titulo: temp.title,
						imagem : temp.imageLinks.thumbnail,					
						autores: temp.authors.join(","),
						paginas: temp.pageCount,
						publicacao: temp.publishedDate,
					};
					successcb(info);
			});
		}
	}


}]);