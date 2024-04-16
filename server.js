var express = require("express");
var app = express();
require('./dbconnection');
let router = require('./route/route');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to: " + port);
})