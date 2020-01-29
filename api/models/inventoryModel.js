//Mongoose is what we will use to interact with a MongoDB(Database) instance.
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
   
    name: {
      type: String,
      required: 'Inventory Name'
    },
    description: {
        type: String,
        default : 'Inventory Item'
    },
    price: {
      type: Number
    },
    quantity: {
        type: Number,
        required: 'Inventory Quantity'
    }
  });
  
  module.exports = mongoose.model('Inventory', InventorySchema);