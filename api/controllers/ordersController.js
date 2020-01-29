'use strict';

var mongoose = require('mongoose'),
  Order = mongoose.model('Orders');

exports.list_all_orders = function(req, res) {
    Order.find({}, function(err, orders) {
    if (err)
      res.send(err);
    res.json(orders);
  });
};



exports.create_order = function(req, res){
  inventory_resp = exports.read_inventory_item(req, res)
  var new_order = new Order(req.body);
  new_order.save(function(err, order) {
    process.stdout.write("hello: ");
    
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.read_a_order = function(req, res) {
    Order.find({_id: req.params.id}, function(err, order) {       
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.update_a_order = function(req, res) {
    Order.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.delete_a_order = function(req, res) {
    Order.remove({
    _id: req.params.id
  }, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted'});
  });
};