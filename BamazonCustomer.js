var mysql      = require('mysql');
var colors = require('colors');
var queries = require('./queries');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '04051997',
  database : 'Bamazon'
});

var schema = {
  properties: {
    ItemID: {
      description: 'Enter an ItemID to get started!',
      message: 'error. try again.',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  You want Item #: ' + result.ItemID);

});

connection.connect();

connection.query(queries.showInventory, function(err, rows, fields) {
  if (err) throw err;

  console.log("Bamazon Storefront".bold.cyan);
  for(var i=0;i<rows.length;i++){
    console.log(("item " + rows[i].ItemID).black.bgCyan + " " + rows[i].Name.bold + " || $" + rows[i].Price.toFixed(2) + (" (" + rows[i].StockQuantity + " available)").grey);
  }
});

// GOTTADO: prompt for an order query.
//if input is INT, query by ItemID. If a VARCHAR, query by Name. **aDD qUERY TO A qUERYtABLE.

//SEARCH BY QUERY,

connection.end();
