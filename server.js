//In this server, we will writing the protocols to create our server.
//express will be used to create the server while 
//nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Orders = require('./api/models/ordersModel'), //created model loading here
  Inventory = require('./api/models/inventoryModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Orderdb'); 
mongoose.connect('mongodb://localhost/Inventorydb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Treez Order Service RESTful API server started on: ' + port)