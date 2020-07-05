'use strict';

const express = require("express");
 
const app = express();
 
app.use(express.static('public'));
 
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/obj', express.static(__dirname + 'public/obj'));
 
var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
