//=============================================================
//  Dependencies
//=============================================================
//require the friendsData.js file to access friends information
var friendsData = require("../data/friendsData");

//=============================================================
//  Routing
//=============================================================

module.exports = function(app) {
//will store information to the array "friends"
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });

//will display information from the array "friends"
    app.post("/api/friends", function(req,res){
        console.log(JSON.stringify(req.body))
        friendsData.push(req.body);
        res.json(true);
    });
};
