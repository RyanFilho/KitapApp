app.factory('livroService', ['$resource', 'helpersService', function ($resource, helpers) {

	var livroServiceFactory = {};
	var resource = $resource('http://wskitap.azurewebsites.net/api/livros');

	var _procurarLivro = function (query, callback) {
		var livros = [];
		//Procurar por isbn
		resource.get({isbn: query}, function (data) {
			livros.push(data);
			if (livros[0]) {
				callback(livros);
			}else {
				callback(null);
			};
		});

		//Procurar por titulo
		resource.query({titulo: query}, function (data) {
			data.forEach(function (livro) {
				if (livro) {
					livros.push(livro);
					callback(livros);
				}else {
					callback(null);
				};
			})

		});

	}

	var _livroPorIsbn = function (isbn, callback) {
		resource.get({isbn: isbn}, function (data) {
			var livro = data;
			if (livro) {
				callback(livro);
			};
		});
	}

	livroServiceFactory.procurarLivro = _procurarLivro;
	livroServiceFactory.livroPorIsbn = _livroPorIsbn;
	return livroServiceFactory;
}]);