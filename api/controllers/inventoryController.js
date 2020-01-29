'use strict';

var mongoose = require('mongoose'),
  Inventory = mongoose.model('Inventory');

exports.list_all_inventories = function(req, res) {
    Inventory.find({}, function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.create_inventory = function(req, res) {
  var new_inventory = new Inventory(req.body);
  new_inventory.save(function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.read_inventory_item = function(req, res) {
    Inventory.find({_id: req.params.id}, function(err, inventory) {       
    if (err)
      res.send(err);
    res.json(inventory);
  });
};

exports.read_inventory_item_by_name = function(req, res) {
    Inventory.find({name: req.params.item_name}, function(err, inventory) {       
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.update_inventory = function(req, res) {
    Inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.delete_inventory = function(req, res) {
    Inventory.remove({
    _id: req.params.id
  }, function(err, inventory) {
    if (err)
      res.send(err);
    res.json({ message: 'Inventory successfully deleted'});
  });
};