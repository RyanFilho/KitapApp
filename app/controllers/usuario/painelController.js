app.controller('painelController', ['$scope', '$resource', 'usuarioService', function ($scope, $resource, usuarioService) {
	
	usuarioService.exemplares(function(exemplares) {
		console.log(exemplares);
		$scope.exemplares = exemplares;
	});
}]);
