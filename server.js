var node_port = 3030;
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var load = require('express-load');
var httpUtil = require('./common/httputil.js');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(objRequest, objResponse, next){

    objResponse.header('Access-Control-Allow-Origin', '*');
    objResponse.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');
    objResponse.header('AAccess-Control-Expose-Headers', 'Location, Content-Disposition');
    objResponse.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, HEAD, OPTIONS');

    next();
});

load('common')
    .then('model')
    .then('route')
    .into(app);

app.listen(node_port);
console.log( "App listening on port "+node_port);
