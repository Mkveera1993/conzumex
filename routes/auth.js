'use strict';
var jwt = require('jsonwebtoken');
var config = require('../config/config');


function isAuthenticated(req, res, next) {
    var token = req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          res.status(401).json({
            success: false,
            message: 'Unautharized'
          });
        } else {
          next();
        }
      });
    } else {
      res.status(401).send({
        success: false,
        message: 'Unautharized'
      });
    }
  }
  module.exports={
    isAuthenticated:isAuthenticated
  }