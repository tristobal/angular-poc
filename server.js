var express = require('express');
var open = require('open');
var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/build'));
app.listen(port, function() {
    console.info("Express server listening http://localhost:" + port);
    open('http://localhost:' + port  + '/');
});
