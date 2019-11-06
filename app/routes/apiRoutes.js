var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {
        var newfriend = req.body;

        console.log(newfriend);

        friends.push(newfriend);

        res.json(newfriend);

        var totalDifferenceArr = [];
        var differenceArr = [];
        var bestMatch;

        for (var j = 0; j < friends.length; j++) {

            var currentFriend = friends[j];

            for (var i = 0; i < currentFriend.scores.length; i++) {
                var difference = Math.abs(newFriend.scores[i] - currentFriend.scores[i]);
                differenceArr.push(difference);
            };

            var totalDifference = differenceArr.reduce((a, b) => a + b, 0)
            totalDifferenceArr.push(totalDifference);

            console.log(differenceArr);
            console.log(totalDifferenceArr);

            differenceArr = [];

        };

        // return the smallest number in totalDifferenceArr array, save to a variable
        Array.min = function(arr) {
            return Math.min.apply(Math, arr);
        };

        var smallestNo = Array.min(totalDifferenceArr);

        // iterate through the totalDiffernece array - the placement in the array gets saved to a variable
        //that variable is matched to friends in matching placement to determine who is the best match
        for (i = 0; i < totalDifferenceArr.length; i++) {
            if (i === smallestNo) {
                bestMatch = friends[i];
            };
        };

        //friends info is used to populate the popup modal
        bestMatchImg = $("<img>");
        bestMatchImg.attr("src", bestMatch.photo);
        bestMatchImg.addClass("img-fluid");
        $("#bestMatch-name").append(bestMatch.name);
        $("#bestMatch-photo").append(bestMatchImg);
    });


    // app.post("/api/clear", function(req, res) {
    //     friends.length = 0;
    //     res.json({ ok: true });
    // });
};