var host = process.env.DB_HOST ||'localhost';
var config = {
    "mongo": {
      "uri": "mongodb://"+host+":27017/",
      "dbName": "conzumex",
      "options": {
        "useNewUrlParser": true
      }
    },
    "secret": 'conzumexSecret'
}

module.exports = config;
