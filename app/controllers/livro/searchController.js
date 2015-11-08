'use strict';
app.controller('searchController', ['$scope', '$location', '$routeParams', 'livroService', '$resource', '$http', function ($scope, $location, $routeParams, livroService, $resource, $http) {
	var queryString = $routeParams.query;
	var resource = $resource('http://wskitap.azurewebsites.net/api/:verb');
	var response = resource.get({verb: 'livros', isbn: queryString}, function (data) {
		console.log(response);
	});

}]);