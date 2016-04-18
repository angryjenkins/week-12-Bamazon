var mysql      = require('mysql');
var colors = require('colors');
var queries = require('./queries');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '04051997',
  database : 'Bamazon'
});

connection.connect();

connection.query(queries.showInventory, function(err, rows, fields) {
  if (err) throw err;

  // query the database, return all items for sale.
  console.log("Bamazon Storefront".bold.cyan);
  for(var i=0;i<rows.length;i++){
    console.log(("item " + rows[i].ItemID).black.bgCyan + " " + rows[i].Name.bold + " || $" + rows[i].Price.toFixed(2) + (" (" + rows[i].StockQuantity + " available)").grey);
  }
});

// prompt for an order query.

connection.end();
