var queries = {
  showInventory: 'SELECT * FROM Bamazon.Products',
  updateAfterOrder: '"UPDATE Products SET StockQuantity= ? WHERE ItemID = ?", [(selectedRow.StockQuantity - result.Quantity), selectedRow.ItemID]'
};

module.exports = queries;
