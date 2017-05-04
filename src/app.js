"use strict";
var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static("webapp"));
app.listen(port, function(){
	console.log("listening on port " + port);
});
