var friends = require("../data/friends");

module.exports = function(app) {
    app.get("api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/clear", function(req, res) {
        friends.length = 0;

        res.json({ ok: true });
    });
};