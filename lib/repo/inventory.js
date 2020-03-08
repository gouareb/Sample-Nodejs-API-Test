var fs = require('file-system');
var request = require('request');
var productApi = require('../apis/productApi.js');
var prdAndInv = require('../apis/prdAndInv.js');
//var prdByFilter = require('../apis/prodByFilter.js')

// our soruce from where we are getting the initial inventory data => get url
var inventory = (app, prd) => {
	var url = 'http://autumn-resonance-1298.getsandbox.com/inventory';
	request(
		{
			url: url,
			json: true,
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				var content = JSON.stringify(body);
				// call the product API with the existing product data that we got from 
				//product method to create our own product get API to the user
				productApi.inventoryApi(app, body);
				var invent = body;
				// call the product and inventory API with the existing product data that we got from 
				//product method and obtaiend inventory data to create our own product & inventory API to the user
				prdAndInv(app, prd, invent);
				// In case if you want to save to a JSON file
				//prdByFilter(app, prd, invent);
				/*fs.writeFile('../model/inventory.json', content, 'utf8', function(err) {
					if (err) {
						return console.log(err);
					}
				}); */
			}
		}
	);
};

module.exports = inventory;
