var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {
        var newfriend = req.body;

        friends.push(newfriend);
        res.json(newfriend);


    });

    // res.json(bestMatch);


    // app.post("/api/clear", function(req, res) {
    //     friends.length = 0;
    //     res.json({ ok: true });
    // });
};