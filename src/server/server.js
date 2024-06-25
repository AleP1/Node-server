const express = require('express')
const path = require('path')

const startServer = (options) => {
   const {port, publicPath = 'public'} = options
   
   
   const app = express()
   app.use(express.static(publicPath))
   
   app.get('/', (req, res) => {
     const indexPath = path.join(__dirname + `../../../${public_Path}/index.html`)
     res.sendFile(indexPath)
   })

   app.listen(port, () => {
      console.log(`Server started on port ${port}`)
   })
}

module.exports = { startServer }