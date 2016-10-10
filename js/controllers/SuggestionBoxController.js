app.controller("SuggestionBoxController", ["$scope", function($scope) {
    $scope.suggestions = [
        {
            "title": "We need more milk.",
            "comments": [],
            "upvotes" : 0
        }, {
            "title": "There is a hurricane coming.",
            "comments": [],
            "upvotes" : 0
        }, {
            "title": "Out of pizza.",
            "comments": [],
            "upvotes" : 0
        }
    ];
    $scope.addSuggestion = function() {
        var newSuggestion = {
            "title": document.getElementById("textbox").value,
            "comments": [],
            "upvotes" : 0
        };
        console.log(newSuggestion.title);
        $scope.suggestions.push(newSuggestion);
    }
}]);