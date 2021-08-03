var book = {
    name: 'rain',
    price: 290,
    color: 'yellow',
    author: 'arafat',
    pages: 280
}
console.log(book);
console.log(book.name);
console.log(book.author);
var bookprice = book.price;
console.log(bookprice);
book.price = 300;
console.log(book);

// DIFFERENT WAYS TO SET A VALUE OF A PROPERTY
book['price'] = 350;
console.log(book);
var priceproperty = 'price';
book[priceproperty] = 400;
console.log(book);
