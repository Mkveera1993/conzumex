'use strict';
var express = require('express');
var router = express.Router();

var userService = require('../services/userService');
var auth = require('./auth')

router.get('/', auth.isAuthenticated, function (req, res, next) {
  userService.getUsers(req.query, function (err, users) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.get('/:id', auth.isAuthenticated, function (req, res, next) {
  userService.getUser(req.params.id, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});


router.post('/', function (req, res, next) {
  userService.createUser(req.body, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(user);
    }
  });
});

router.post('/login', function (req, res, next) {
  userService.login(req.body, function (err, user) {
    if (err) {
      res.status(500).send(err)
    } else if (user.status === 401) {
      delete user.status;
      res.status(401).send(user);
    } else {
      res.status(200).send(user);
    }
  });
});

router.put('/:id', auth.isAuthenticated, function (req, res, next) {
  req.body.id = req.params.id;
  userService.updateUser(req.body, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});


router.delete('/:id', auth.isAuthenticated, function (req, res, next) {
  userService.removeUser(req.params.id, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send(user);
    }
  });
});



module.exports = router;
