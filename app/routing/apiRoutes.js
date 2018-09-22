//=============================================================
//  Dependencies
//=============================================================
//require the friendsData.js file to access friends information
var friends = require("../data/friendsData");

//=============================================================
//  Routing
//=============================================================

module.exports = function(app) {
//will store information to the array "friends"
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

//will display information from the array "friends"
    app.post("/api/friends", function(req,res){
        console.log("req.body: " +  req.body);
        var friendInfo = req.body.scores;
        var friendName = "";
        var friendPhoto = "";
        var friendScore = 1000;

//for loop to go through each friend in the "friends" object array
        for(var i = 0; i < friends.length; i++) {
        //create another for loop to go through the scores of each friend in the "friends" object array and save the variance
            var compare = 0;
            for(var j = 0; j < friendInfo.length; j++) {
        //use Math.abs() to return positive answers (i.e. 2-4 and 4-2 return a positive 2)
                compare += Math.abs(friends[i].scores[j] - friendInfo[j]);
            }
            console.log("compare: " + compare);

            if(compare <= friendScore) {
                console.log("match is: " + compare + " " + friends[i].name);

                friendScore = compare;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
            }
        }

        friends.push(req.body);
        res.json({status: "ok", friendName: friendName, friendPhoto: friendPhoto});
    });
};
