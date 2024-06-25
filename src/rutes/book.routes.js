const express = require('express')
const router = express.Router()
const Book = require('../models/book.model')

const getBooks = async (req, res, next) => {  
   let book;
   const { id } = req.params;
   if (id.match(/[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'El id del libro no es valido' })   
   }
    try {
        book = await Book.findById(id)
        if (!book) {
            return res.status(404).json({ error: 'No se encontro el libro' })
        }
        res.json(book)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' })
    }

    res.book = book;
    next()
}

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        if (books.length === 0) {
            return res.status(204).json([])
        }
        res.json(books)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' })
    }
})
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then(book => {
        res.json(book)
    })
})

router.post('/', async (req, res) => {

    const {
        title,
        author,
        genre,
        price,
        isbn,
        pages,
        publisher,
        language,
        year,
        description
    } = req?.body

    if (!title || !author || !genre || !price || !isbn || !pages || !publisher || !language || !year || !description) {
        return res.status(400).json({ error: 'Faltan campos' })
    }

    const book = new Book({
        title,
        author,
        genre,
        price,
        isbn,
        pages,
        publisher,
        language,
        year,
        description
    })

    try{
        const newBook = await book.save()
        res.status(201)._constructjson(newBook)   
    }catch(error){
        res.status(400).json({ error: 'Error al crear el libro' })
    }
})

module.exports = router