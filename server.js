//=============================================================
//  Dependencies
//=============================================================
//use express and body-parser packages to set up the server
var express = require("express");
var bodyParser = require("body-parser");

//=============================================================
//set up the server:
var app = express();
var PORT = process.env.PORT || 3050

//Express app that handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//=============================================================
//  Routing
//=============================================================
//connects server to the apiRoutes.js and htmlRoutes.js files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//=============================================================
//listener, will start up the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});