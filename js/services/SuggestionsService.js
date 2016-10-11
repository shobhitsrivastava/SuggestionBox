app.factory("SuggestionsService", [function () {
    'use strict';
    var demoSuggestions = {
        posts: [
            {
                title: "We need more milk.",
                comments: [{
                    body: "We need mas leche."
                }, {
                    body: "hello this is a comment"
                }, {
                    body: "Comment again"
                }],
                upvotes : 0,
                id: 0
            }, {
                title: "There is a hurricane coming.",
                comments: [],
                upvotes : 0,
                id: 1
            }, {
                title: "Out of pizza.",
                comments: [],
                upvotes : 0,
                id: 2
            }
        ]
    };
    return demoSuggestions;
}]);