app.factory('usuarioService', ['$resource', function ($resource) {
	var usuarioServiceFactory = {};
	var resource = $resource('http://wskitap.azurewebsites.net/api/usuario/:user/exemplares/')
	var _exemplares = function (callback) {
		resource.query({usuario: 'admin'}, function (data) {
			var exemplares = data;
			if (exemplares[0]) {
				callback(exemplares);
			};
		});
	}

	usuarioServiceFactory.exemplares = _exemplares;
	return usuarioServiceFactory;
}]);