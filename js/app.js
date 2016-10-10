var app = angular.module("SuggestionBox", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "SuggestionBoxController",
            templateUrl: "views/main.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});