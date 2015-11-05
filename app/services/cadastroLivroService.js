app.factory('cadastroLivroService', ['$resource', function ($resource) {
	return $resource('wskitap.azurewebsites.net/api/livros/:id');
}]);