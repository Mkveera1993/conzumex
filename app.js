'use strict';
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser=require('body-parser');


var config=require('./config/config')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hotelsRouter = require('./routes/hotels');
var dishesRouter = require('./routes/dishes');


var seedData=require('./seedData');



mongoose.connect(config.mongo.uri + config.mongo.dbName, config.mongo.options, function (err, db) {
    if (err) {
        console.log(`Mongodb connection failed==>${err}`)
    } else {        
        console.log(`mongodb successfully connected with host ${config.mongo.uri } and DB ==>${config.mongo.dbName}`)
    }
});

var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/hotels', hotelsRouter);
app.use('/api/v1/dishes', dishesRouter);
seedData.generateData();
module.exports = app;
