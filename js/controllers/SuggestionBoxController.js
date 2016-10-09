app.controller("SuggestionBoxController", ["$scope", function($scope) {
    $scope.suggestions = [
        {
            "title": "We need more milk."
        }, {
            "title": "There is a hurricane coming."
        }, {
            "title": "Out of pizza."
        }
    ];
    $scope.addSuggestion = function() {
        var newSuggestion = {
            "title": document.getElementById("textbox").value
        };
        console.log(newSuggestion.title);
        $scope.suggestions.push(newSuggestion);
    }
}]);