const express = require('express'),
bodyParser = require('body-parser'),
logger = require('morgan'),
twatt = require('./routes/twatt');

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/twatt', twatt);

app.listen(3000, () => console.log('Connected Port 3000'));
