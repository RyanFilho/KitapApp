app.factory('livroService', ['$resource', function ($resource) {
	var resource = $resource('http://wskitap.azurewebsites.net/api/:verb');
	var _procurarLivro = function (query) {
		var resultado = [];
		resource.get({verb: 'livros', isbn: query}, function (data) {
			
		});
	}
	return $resource('wskitap.azurewebsites.net/api/livros/:id');
}]);