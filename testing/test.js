var friends = [{
        "name": "Ruth",
        "photo": "https://vignette.wikia.nocookie.net/glow/images/b/b7/Ruth_Wilder.jpg",
        "scores": [
            4,
            3,
            2,
            1,
            2,
            3,
            5,
            1,
            1,
            2
        ]
    },

    {
        "name": "Sam",
        "photo": "https://www.goldderby.com/wp-content/uploads/2018/04/marc-maron-glow.jpg",
        "scores": [
            5,
            5,
            5,
            4,
            2,
            4,
            4,
            5,
            5,
            4
        ]
    },

    {
        "name": "Cherry",
        "photo": "https://www.essence.com/wp-content/uploads/2018/06/1530127725/GLOW_110_03802R.jpg",
        "scores": [
            2,
            4,
            4,
            4,
            4,
            2,
            3,
            4,
            3,
            3
        ]
    },

    {
        "name": "Carmen",
        "photo": "https://vignette.wikia.nocookie.net/glow/images/c/cd/Carmen_Wade.jpg/revision/latest?cb=20170710123041",
        "scores": [
            3,
            1,
            1,
            1,
            3,
            1,
            2,
            3,
            2,
            1
        ]
    },

    {
        "name": "Chey",
        "photo": "https://vignette.wikia.nocookie.net/glow/images/e/e5/Jenny_Chey.jpg/",
        "scores": [
            1,
            2,
            4,
            1,
            5,
            4,
            1,
            2,
            4,
            1
        ]
    },

]

var newFriend = {
    "name": "Georgina",
    "photo": "https://vignette.wikia.nocookie.net/glow/images/e/e5/Jenny_Chey.jpg/",
    "scores": [
        3,
        2,
        4,
        1,
        5,
        4,
        1,
        2,
        4,
        1
    ]
}

// for each friend in the array...
//find the difference between each score in their array to each score in the newFriend score array
// save the difference to a variable and push it to an array
// total all the scores in that array to find the totalDifference
// save the totalDifference to a totalDifferenceArr array

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