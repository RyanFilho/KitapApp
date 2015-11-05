var app = angular.module('KitapApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngResource']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "app/views/usuario/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "app/views/usuario/signup.html"
    });

    $routeProvider.when("/livro/cadastro", {
        controller: "cadastroLivroController",
        templateUrl: "app/views/livro/cadastro.html"
    });

    $routeProvider.when("/painel", {
        controller: "",
        templateUrl: "app/views/usuario/painel.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

var serviceBase = 'http://kitapws.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'KitapAppJs'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
