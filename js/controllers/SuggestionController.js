app.controller("SuggestionController", ["$scope", "$routeParams", function($scope, $routeParams) {
    $scope.suggestion = $scope.suggestions[$routeParams.id];
    $scope.addComment = function() {
        var newComment = {
            "body": document.getElementById("textbox").value
        };
        $scope.suggestion.comments.push(newComment);
    };
}]);