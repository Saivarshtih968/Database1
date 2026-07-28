use('ecommerce');

// db.orders.deleteMany({status: "Delivered"}); //deleteMany() method is used to delete multiple documents. Here we are deleting all orders with the status "delivered"

db.products.deleteMany({price: {$lt: 20}}); //deleteMany() method is used to delete multiple documents. Here we are deleting all products with the price less than $20