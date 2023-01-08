const express = require('express') // import express package
const dotenv = require('dotenv').config() // import dotenv - hold environment variables
const PORT = process.env.PORT || 5000 // get 'PORT' variable from .env file

const app = express() // initiallise express as 'app'

// middleware section
app.use(express.json)
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Server ruuning on port: ${PORT}`)
})
