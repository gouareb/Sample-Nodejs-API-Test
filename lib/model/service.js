//var prdByFilter = require('../apis/prodByFilter.js');
var prdAndInv = require('../apis/prdAndInv.js');
var request = require('request');
var products = require('../repo/products.js');
var inventoryy = require('../repo/inventory.js');

var appRouter = async app => {
	// product API
	await products(app);
};

module.exports = appRouter;
