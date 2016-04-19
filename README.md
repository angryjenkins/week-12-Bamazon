# Bamazon

Welcome to the virtual Bamazon storefront!! In this assignment I was tasked to build an app that uses MySQL and Node to track and manage the inventory of a fake online store. In doing so, I took the following steps:

+ set up a database for the store, including a table for Product inventory.
+ populate the table with mock inventory data. I used CSV import for this. I had issues doing this in class - I received the folloeing error.

> "ERROR 1148: The used command is not allowed with this MySQL version"

It turns out MySQL by default does not allow this feature, as it can be a security breach. Therefore on my Linux laptop I could not use the Data Import Wizard. I did this through the command line using the command *mysql u root -p --local-infile* and then loaded my CSV into my table using this script:

> LOAD DATA LOCAL INFILE 'initial_inventory.csv' INTO TABLE Products;

Now that data is loaded into the table, I can query it using Node. The script *BamazonCustomer.js* does this, using the NPM package "prompt" to take in user input and another npm package, mysql, to query the database that tracks items. To facilitate the queries, I decided to add them to their own module, so I could use them there instead of typing them repeatedly. The module is saves as *queries.js*.
