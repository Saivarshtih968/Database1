use ('ecommerce');

 db.products.updateMany(
     {category:"Electronics"},//first select the documents which you want to update. Here we are selecting all products in the "Electronics" category
     {$inc:{price: 100}}
); //updateMany() method is used to update multiple documents. Here we are updating the price of all products in the "Electronics" category by $100

//set is for replacing the older values
//inc is for incrementing the older values

 db.products.updateMany(
     {category:"Electronics"},//first select the documents which you want to update. Here we are selecting all products in the "Electronics" category
     {$set:{category: "Gadgets"}}
 );


