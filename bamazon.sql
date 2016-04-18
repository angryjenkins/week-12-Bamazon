CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE `Bamazon`.`Products` (
  `ItemID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(60) NOT NULL,
  `DepartmentName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(13,4) NOT NULL,
  `StockQuantity` NUMERIC(3,0) NOT NULL,
  PRIMARY KEY (`ItemID`)
);

-- need mysql --local-infile to run this script
LOAD DATA LOCAL INFILE 'initial_inventory.csv' INTO TABLE Products;