'use strict';

var Hotels = require('../models/hotel.model');


function getHotels(query, callback) {
  query = query || {};
  Hotels.find(query, (err, hotels) => {
    if (err) {
      callback(err);
    } else {
      callback(null, hotels);
    }
  });
}

function getHotel(id, callback) { 
  Hotels.findById(id, (err, hotel) => {
    if (err) {
      callback(err);
    } else {
      console.log(hotel)
      callback(null, hotel);
    }
  });
}

function createHotel(body, callback) {
  Hotels.create(body, (err, hotel) => {
    if (err) {
      callback(err);
    } else {
      callback(null, hotel);
    }
  });
}

function updateHotel(body, callback) {
  Hotels.findById(body.id, (err, hotel) => {
    if (err) {
      callback(err);
    } else {
      hotel = Object.assign(hotel, body);
      hotel.save((err, hotel) => {
        if (err) {
          callback(err);
        } else {
          callback(null, hotel);
        }
      });
    }
  });
}

function removeHotel(id, callback) {
  Hotels.findById(id, function (err, hotel) {
    if (err) {
      callback(err);
    } else if (!hotel) {
      callback({
        status: 404,
        message: "Hotel not found"
      });
    } else {
      hotel.remove((err) => {
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




module.exports = {
  getHotels: getHotels,
  createHotel: createHotel,
  getHotel: getHotel,
  updateHotel: updateHotel,
  removeHotel: removeHotel
};
