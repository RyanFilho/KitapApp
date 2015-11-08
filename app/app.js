var app = angular.module('KitapApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngResource']);

app.config(function ($routeProvider) {

    $routeProvider
    .when("/home", {
        controller: "homeController",
        templateUrl: "app/views/home.html"
    })

    .when("/login", {
        controller: "loginController",
        templateUrl: "app/views/usuario/login.html"
    })

    .when("/signup", {
        controller: "signupController",
        templateUrl: "app/views/usuario/signup.html"
    })

    .when("/painel", {
        controller: "painelController",
        templateUrl: "app/views/usuario/painel.html"
    })

    .when("/livro/cadastro", {
        controller: "cadastroExemplarController",
        templateUrl: "app/views/livro/cadastro.html"
    })

    .when("/search", {
        controller: "searchController",
        templateUrl: "app/views/livro/search.html"
    })

    .otherwise({ redirectTo: "/home" });
});

var serviceBase = 'http://kitapws.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'KitapAppJs'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', '$rootScope', '$location', function (authService, $rootScope, $location) {
    authService.fillAuthData();
    $rootScope.pesquisar = function(value) {
        $location.path('/search').search({query: value});
    };
}]);
