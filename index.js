var express = require("express");
var app = express();
var path = require('path');
 
app.use(express.static("public"));

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname + "/public/color_game.html"));
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Started Node Server");
})