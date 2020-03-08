//var productList = require('../model/products.json');
//var inventoryList = require('../model/inventory.json');

// Function that creates API for Product list and product list filter
var prdAndInv = (app, prd, invent) => {
	var inventory = invent;
	var product = JSON.parse(JSON.stringify(prd));
	var inv = JSON.parse(JSON.stringify(inventory));

	// API for for product list, i.e. outputs product, price & inventory
	app.get('/api/productList', (req, res) => {
		var inven = [];

		var result = [];
		for (x in product) {
			result.push({
				name: product[x].name,
				price: product[x].price,
			});

			for (y in product) {
				if (inv.inventory[y].name === product[x].name) {
					result[x]['inventory'] = inv.inventory[y].inventory;
				}
			}
		}
		var sent = JSON.stringify(result);
		console.log(`sent: ${sent}`);
		res.status(200).send(result);
	});

	// With parameter

	// API for for product list, i.e. outputs product, price & inventory by filter
	app.get('/api/productList/:productName', (req, res) => {
		var productName = req.params.productName;
		//console.log(`productName:${productName}`);
		var lstprd = new Array();
		var lstInv = new Array();
		for (y in inv.inventory) {
			lstInv.push({
				name: inv.inventory[y].name,
				inventory: inv.inventory[y].inventory,
			});
		}
		for (x in product) {
			if (product[x].name === productName) {
				lstprd.push({
					name: product[x].name,
					price: product[x].price,
				});
			}
		}
		lstInv = JSON.parse(JSON.stringify(lstInv));
		//console.log(`lstInv:${JSON.stringify(lstInv)}`);
		for (i in lstInv) {
			var exist = lstInv[i].name === productName ? `yes` : `no`;
			console.log(exist);
			if (exist === `yes`) {
				console.log(lstInv[i].inventory);
				lstprd.push({
					['inventory']: lstInv[i].inventory,
				});
			} else if (exist === `no`) {
				console.log(` I willnot iterate`);
			}
		}
		//console.log(`heya:${JSON.stringify(lstInv)}`);

		var sent = JSON.stringify(lstprd);
		if (lstprd.length > 0) {
			res.status(200).send(lstprd);
		} else {
			//res.status(404).send(`[{error:No Data Found}]`);
			// Custom Error message => result
			var result = {
				message: 'Please Verify the data entered',
				error: `{error.stack: No Data Matched with the list}`,
			};
			res.status(200).send(result);
		}
	});
};
module.exports = prdAndInv;
