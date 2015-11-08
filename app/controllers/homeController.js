'use strict';
app.controller('homeController', ['$scope', '$location', function ($scope, $location) {
	$scope.pesquisar = function(value) {
		$location.path('/search').search({query: value});
	};
}]);