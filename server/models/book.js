let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,
    item:String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);