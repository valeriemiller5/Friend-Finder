//=============================================================
//  Dependencies
//=============================================================
//use path package to access the correct html file paths
var path = require("path");

//=============================================================
//  Routing
//=============================================================

module.exports = function(app) {
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    //will default back to the home page if there's no matching route
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
