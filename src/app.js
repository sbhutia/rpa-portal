"use strict";
var express = require("express");
var app = express();

app.use(express.static("webapp"));
app.listen(8080, function(){
	console.log("listening on port 8080");
});