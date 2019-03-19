'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishesSchema = new Schema({ 
    name: {
        type:String
    },
    hotel: {
        type:Schema.Types.ObjectId,
        ref:'hotel'
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    price:{
        type:Number
    }    
});


module.exports = mongoose.model('Dish', DishesSchema);