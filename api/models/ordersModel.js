//Mongoose is what we will use to interact with a MongoDB(Database) instance.
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    item_name:{
        type: String,
        required: 'Item ordered'
    },
    quantity:{
        type: Number
    },
    email: {
      type: String,
      required: 'Customer Email Address'
    },
    date_placed: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['cancelled', 'pending',  'completed']
      }],
      default: ['completed']
    }
  });
  
  module.exports = mongoose.model('Orders', OrderSchema);