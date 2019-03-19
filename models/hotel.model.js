'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({ 
    name: {
        type:String
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    place:{
        type:String
    }
    
});


module.exports = mongoose.model('Hotel', HotelSchema);