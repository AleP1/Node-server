const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    price: Number,
    isbn: String,
    pages: Number,
    publisher: String,
    language: String,
    year: Number,
    description: String,
})

module.exports = mongoose.model('book', bookSchema)