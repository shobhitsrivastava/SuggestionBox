var app = angular.module("SuggestionBox", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "SuggestionBoxController",
            templateUrl: "views/Main.html"
        })
        .when("/:id", {
            controller: "SuggestionController",
            templateUrl: "views/Suggestion.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});