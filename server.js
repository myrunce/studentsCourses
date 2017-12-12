const path = require('path'); 

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));

var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})