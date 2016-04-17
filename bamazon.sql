CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE `Bamazon`.`Products` (
  `ItemID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NOT NULL,
  `DepartmentName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(13,4) NOT NULL,
  `StockQuantity` INT(11) NOT NULL,
  PRIMARY KEY (`ItemID`)
);

LOAD DATA LOCAL INFILE 'initial_inventory.csv' INTO TABLE Products;