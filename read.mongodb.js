use ('ecommerce');

// db.products.find({"category":"Home"});

// db.products.find({price:{$lt: 20}});

// db.products.find({$and: [{category:"Home"},{price:{$lt: 20}}]});//two conditions are taken inside so it should be in array

// db.products.find({price:{$lt: 20}},{_id: 0, name: 1, stock: 1});-projection is used to show only the required fields and hide the rest of the fields. Here we are hiding _id field and showing name and stock fields

//for sorting we can use sort() method
// db.products.find({price:{$lt: 20}}).sort({price:1}); //1 for ascending order and -1 for descending order


// db.products.find({price:{$gt: 0}},{_id: 0, name: 1, stock: 1,price: 1}).sort({price:-1});

db.products.find({price:{$gt: 0}},{_id: 0, name: 1, stock: 1,price: 1}).sort({price:-1}).limit(4).skip(2);;
