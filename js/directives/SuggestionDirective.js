app.directive("suggestion", function() {
    return {
        restrict: "E",
        scope: {
            info : "="
        },
        templateUrl: "js/directives/SuggestionDirective.html"
    };
})