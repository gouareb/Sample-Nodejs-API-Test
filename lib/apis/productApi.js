var request = require('request');
var productApi = (app, resp) => {
	// Product API
	app.get('/api/products', (req, res, body) => {
		console.log(`Products::${JSON.stringify(resp)}`);
		res.status(200).send(resp);
	});

	// Filter Product By product name API
	app.get('/api/products/:productName', (req, res, body) => {
		var productName = req.params.productName;
		var pr = JSON.parse(JSON.stringify(resp));
		var singleProduct = new Array();
		for (x in pr) {
			if (pr[x].name === productName) {
				singleProduct.push({
					name: pr[x].name,
					price: pr[x].price,
				});
			}
		}
		console.log(`singleProduct::${JSON.stringify(singleProduct)}`);
		res.status(200).send(singleProduct);
	});
};

var inventoryApi = (app, results) => {
	// Inventory API
	app.get('/api/inventory', function(req, res, body) {
		console.log(`inventory:${JSON.stringify(results)}`);
		res.status(200).send(results);
	});

	// Filter Inventory by name API
	app.get('/api/inventory/:inventoryName', function(req, res, body) {
		var inventoryName = req.params.inventoryName;
		var iny = JSON.parse(JSON.stringify(results));
		console.log(`iny:${JSON.stringify(iny)}`);
		var singleInventory = new Array();
		for (y in iny.inventory) {
			if (iny.inventory[y].name === inventoryName) {
				singleInventory.push({
					name: iny.inventory[y].name,
					inventory: iny.inventory[y].inventory,
				});
			}
		}
		console.log(`singleInventory:${JSON.stringify(singleInventory)}`);
		res.status(200).send(singleInventory);
	});
};

module.exports.inventoryApi = inventoryApi;
module.exports.productApi = productApi;
