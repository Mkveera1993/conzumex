'use strict';
var express = require('express');
var router = express.Router();
var hotelService = require('../services/hotelService');
var auth = require('./auth');

router.get('/', auth.isAuthenticated, function (req, res, next) {
  hotelService.getHotels(req.query, function (err, hotels) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(hotels);
    }
  });
});

router.get('/:id', auth.isAuthenticated, function (req, res, next) {
  hotelService.getHotel(req.params.id, function (err, hotel) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(hotel);
    }
  });
});


router.post('/', auth.isAuthenticated, function (req, res, next) {
  hotelService.createHotel(req.body, function (err, hotel) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(hotel);
    }
  })
});

router.put('/:id', auth.isAuthenticated, function (req, res, next) {
  req.body.id = req.params.id;
  hotelService.updateHotel(req.body, function (err, hotel) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(hotel);
    }
  });
});


router.delete('/:id', auth.isAuthenticated, function (req, res, next) {
  hotelService.removeHotel(req.params.id, function (err, hotel) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send(hotel);
    }
  });
});
module.exports = router;
