'use strict';
module.exports = function(app) {
  var orderList = require('../controllers/ordersController');

  // orders Routes
  app.route('/orders')
    .get(orderList.list_all_orders)
    .post(orderList.create_order);


  app.route('/orders/:id')
    .get(orderList.read_a_order)
    .put(orderList.update_a_order)
    .delete(orderList.delete_a_order);

var inventoryList = require('../controllers/inventoryController');

  // inventory Routes
  app.route('/inventories')
    .get(inventoryList.list_all_inventories)
    .post(inventoryList.create_inventory);


  app.route('/inventories/:id')
    .get(inventoryList.read_inventory_item)
    .put(inventoryList.update_inventory)
    .delete(inventoryList.delete_inventory);
};