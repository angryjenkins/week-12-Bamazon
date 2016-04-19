var queries = {
  showInventory: 'SELECT * FROM Bamazon.Products',
  updateAfterOrder: '"UPDATE Products SET StockQuantity= ? WHERE StockQuantity = ?", [selectedRow.StockQuantity,(selectedRow.StockQuantity - result.Quantity)]'
};

module.exports = queries;
