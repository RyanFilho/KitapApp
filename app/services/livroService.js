app.factory('livroService', ['$resource', 'helpersService', function ($resource, helpers) {

	var livroServiceFactory = {};
	var resource = $resource('http://wskitap.azurewebsites.net/api/livros');

	var _procurarLivro = function (query, callback) {

		//Procurar por isbn
		resource.query({isbn: query}, function (data) {
			var livros = data;
			if (livros[0]) {
				callback(livros);
			};
		});

		//Procurar por titulo
		resource.query({titulo: query}, function (data) {
			var livros = data;
			if (livros[0]) {
				callback(livros);
			};
		});

		
	}

	livroServiceFactory.procurarLivro = _procurarLivro;
	return livroServiceFactory;
}]);