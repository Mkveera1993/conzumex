
var Dishes = require('../models/dishes.model');


function getDishes(query, callback) {
    query = query || {};
    Dishes.find(query).populate([{ path: 'hotel', select: 'name' }]).exec((err, dishes) => {
      if (err) {
        callback(err);
      } else {
        callback(null, dishes);
      }
    });
}

function getDish(id, callback) {
    Dishes.findById(id).populate([{ path: 'hotel', select: 'name' }]).exec((err, dish) => {
        if (err) {
          callback(err);
        } else {
          callback(null, dish);
        }
      });
}

function createDish(body, callback) {
    Dishes.create(body, (err, dish) => {
        if (err) {
          callback(err);
        } else {
          callback(null, dish);
        }
      });
}

function updateDish(body, callback) {
    Dishes.findById(body.id, (err, dish) => {
        if (err) {
          callback(err);
        } else {
            dish = Object.assign(dish, body);
            dish.save((err, dish) => {
            if (err) {
              callback(err);
            } else {
              callback(null, dish);
            }
          });
        }
      });
}

function removeDish(id, callback) {
    Dishes.findById(id, function (err, dish) {
        if (err) {
          callback(err);
        } else if (!dish) {
          callback({
            status: 404,
            message: "Dish not found"
          });
        } else {
            dish.remove((err) => {
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
    getDishes: getDishes,
    createDish: createDish,
    getDish: getDish,
    updateDish: updateDish,
    removeDish:removeDish
};
