app.controller("SuggestionBoxController", ["$scope", "SuggestionsService", function ($scope, SuggestionsService) {
    'use strict';
    $scope.suggestions = SuggestionsService.posts;
    $scope.addSuggestion = function () {
        var newSuggestion = {
            "title": document.getElementById("textbox").value,
            "comments": [],
            "upvotes" : 0
        };
        $scope.suggestions.push(newSuggestion);
    };
    $scope.upvote = function (suggestion) {
        suggestion.upvotes += 1;
    };
}]);