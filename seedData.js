'use strict';

var userService = require('./services/userService');
var hotelService = require('./services/hotelService');
var dishService = require('./services/dishService');



console.log('Seed Data Started')

var users = [{
    "username": "Blanche",
    "age": 29,
    "password": "Blanche@123"
  },
  {
    "username": "Lorraine",
    "age": 25,
    "password": "Lorraine@123"
  },
  {
    "username": "Charlene",
    "age": 31,
    "password": "Charlene@123"
  },
  {
    "username": "Diane",
    "age": 37,
    "password": "Diane@123"
  },
  {
    "username": "Tricia",
    "age": 38,
    "password": "Tricia@123"
  }

];
var hotels = [{
    "name": "Hotel BEDDER ",
    "place": "645 Olive Street, Winchester, California, 1485"
  },
  {
    "name": "Hotel ISONUS",
    "place": "839 Flatbush Avenue, Whipholt, Colorado, 341"
  },
  {
    "name": "Hotel NETILITY",
    "place": "381 Forest Place, Dawn, Iowa, 4820"
  },
  {
    "name": "Hotel KIDGREASE",
    "place": "195 Karweg Place, Glidden, New York, 4987"
  },
  {
    "name": "Hotel GLEAMINK",
    "place": "902 Harbor Court, Cliffside, Virginia, 1050"
  },
];
var dishes = [{
    "name": "EARTHMARK",
    "price": 743
  },
  {
    "name": "SQUISH",
    "price": 180
  },
  {
    "name": "COMVENE",
    "price": 727
  },
  {
    "name": "AQUOAVO",
    "price": 301
  },
  {
    "name": "NITRACYR",
    "price": 696
  },
  {
    "name": "PHARMEX",
    "price": 757
  },
  {
    "name": "GEOSTELE",
    "price": 740
  },
  {
    "name": "NETAGY",
    "price": 705
  },
  {
    "name": "CODAX",
    "price": 586
  },
  {
    "name": "PHARMACON",
    "price": 587
  },
  {
    "name": "SUPREMIA",
    "price": 295
  },
  {
    "name": "EVIDENDS",
    "price": 109
  },
  {
    "name": "TRASOLA",
    "price": 254
  },
  {
    "name": "VERAQ",
    "price": 211
  },
  {
    "name": "SNOWPOKE",
    "price": 105
  },
  {
    "name": "REPETWIRE",
    "price": 154
  },
  {
    "name": "ATGEN",
    "price": 803
  },
  {
    "name": "EURON",
    "price": 297
  },
  {
    "name": "DEEPENDS",
    "price": 373
  },
  {
    "name": "VALREDA",
    "price": 995
  },
  {
    "name": "TASMANIA",
    "price": 722
  },
  {
    "name": "COMCUBINE",
    "price": 387
  },
  {
    "name": "TERRASYS",
    "price": 305
  },
  {
    "name": "MOTOVATE",
    "price": 640
  },
  {
    "name": "UTARIAN",
    "price": 664
  },
  {
    "name": "MYOPIUM",
    "price": 271
  },
  {
    "name": "NETUR",
    "price": 674
  },
  {
    "name": "GAZAK",
    "price": 927
  },
  {
    "name": "ZIDOX",
    "price": 984
  },
  {
    "name": "PIGZART",
    "price": 126
  },
  {
    "name": "INQUALA",
    "price": 969
  },
  {
    "name": "YURTURE",
    "price": 329
  },
  {
    "name": "DEVILTOE",
    "price": 290
  },
  {
    "name": "INTERGEEK",
    "price": 223
  },
  {
    "name": "LOCAZONE",
    "price": 253
  },
  {
    "name": "NURALI",
    "price": 701
  },
  {
    "name": "GLEAMINK",
    "price": 750
  },
  {
    "name": "ROCKABYE",
    "price": 737
  },
  {
    "name": "COMTOURS",
    "price": 892
  },
  {
    "name": "ECLIPSENT",
    "price": 101
  },
  {
    "name": "SPACEWAX",
    "price": 499
  },
  {
    "name": "CIPROMOX",
    "price": 461
  },
  {
    "name": "ASSISTIX",
    "price": 705
  },
  {
    "name": "PYRAMIS",
    "price": 113
  },
  {
    "name": "GONKLE",
    "price": 250
  },
  {
    "name": "QUILCH",
    "price": 501
  },
  {
    "name": "AMTAS",
    "price": 679
  },
  {
    "name": "TUBALUM",
    "price": 786
  },
  {
    "name": "ZANYMAX",
    "price": 785
  },
  {
    "name": "QNEKT",
    "price": 910
  }
];


var newUser = function newUser(user) {
  return new Promise((resolve, reject) => {
    userService.createUser(user, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};


function newHotel(hotel) {
  return new Promise((resolve, reject) => {
    hotelService.createHotel(hotel, (err, createdhotel) => {
      if (err) {
        reject(err);
      } else {
        resolve(createdhotel);
      }
    });
  });
}

var createHotels = async function createHotels(users) {
  var createdHotels = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    var hotel = hotels[i];
    hotel.user = user._id;
    var createdHotel = await newHotel(hotel);
    createdHotels.push(createdHotel);
  }
  return createdHotels;
};


function newDish(dish) {
  return new Promise((resolve, reject) => {
    dishService.createDish(dish, (err, dish) => {
      if (err) {
        reject(err);
      } else {
        resolve(dish);
      }
    });
  });
}
var createDishes = async function createDishes(hotels) {
  var createdDishes = [];
  for (let i = 0; i < hotels.length; i++) {
    const hotel = hotels[i];
    var first10Dishes = dishes.splice(0, 10);
    for (let k = 0; k < first10Dishes.length; k++) {
      var dish = first10Dishes[k];
      dish.hotel = hotel._id;
      dish.user = hotel.user;
      var cDish = await newDish(dish);
      createdDishes.push(cDish);
    }
  }
  return createdDishes;
}
var createdUsers = users.map(newUser);
var results = Promise.all(createdUsers);

function generateData(){  
results.then((users) => {
  console.log(`${users.length} Users created`);
  createHotels(users).then((hotels) => {
    console.log(`${hotels.length} Hotels created`);
    createDishes(hotels).then((dishes) => {
      console.log(`${dishes.length} Dishes created`);
    });
  });
}).catch((err) => {
  console.log(`Error while generating data ==> ${err}`);
});
}
module.exports={
  generateData:generateData
};