'use strict';
var jwt = require('jsonwebtoken');
var config = require('../config/config');


var Users = require('../models/user.model');



function getUsers(query, callback) {
  query = query || {};
  Users.find(query, {
    "salt": 0,
    "passwordHash": 0
  }, (err, users) => {
    if (err) {
      callback(err);
    } else {
      callback(null, users);
    }
  });
}

function getUser(id, callback) {
  Users.findById(id, {
    "salt": 0,
    "passwordHash": 0
  }, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

function createUser(body, callback) {
  if (!body.username || !body.password) {
    callback("Credentials Missing");
  } else {
    Users.create(body, (err, user) => {
      if (err) {
        callback(err);
      } else {
        user=JSON.parse(JSON.stringify(user))
        delete user.salt;
        delete user.passwordHash;
        callback(null, user);
      }
    });
  }
}

function updateUser(body, callback) {
  Users.findById(body.id, (err, user) => {
    if (err) {
      callback(err);
    } else {
      user = Object.assign(user, body);
      user.save((err, user) => {
        if (err) {
          callback(err);
        } else {
          callback(null, user);
        }
      });
    }
  });
}

function removeUser(id, callback) {
  Users.findById(id, function (err, user) {
    if (err) {
      callback(err);
    } else if (!user) {
      callback({
        status: 404,
        message: "User not found"
      });
    } else {
      user.remove((err) => {
        if (err) {
          callback(err);
        } else {
          callback(null, {
            message: "success"
          });
        }
      });
    }
  });
}


function login(body, callback) {
  if (!body.username || !body.password) {
    callback("Credentials Missing");
  } else {
    Users.findOne({
      username: body.username
    }, (err, user) => {
      if (err) {
        callback(err);
      } else if (!user) {
        callback(null, {
          status: 401,
          message: "User Not Found"
        });
      } else if (!user.authenticate(body.password)) {
        callback(null, {
          status: 401,
          message: "Password is Incorrect"
        });
      } else {
        const JWTToken = jwt.sign({
            username: user.username,
            _id: user._id
          },
          config.secret, {
            expiresIn: '2h'
          });
        callback(null, {
          message: 'login Success for ' + user.username,
          token: JWTToken
        });
      }
    });
  }
}



module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser,
  login: login

};
