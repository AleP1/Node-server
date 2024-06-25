const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

const bookRouter = require('./routes/book.routes')

const app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.MONGODB_DB_NAME})
const db = mongoose.connection

app.use('./books', bookRouter)

const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
}
)
