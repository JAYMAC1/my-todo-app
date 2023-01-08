const express = require('express') // import express package
const dotenv = require('dotenv').config() // import dotenv - hold environment variables
const PORT = process.env.PORT || 5000 // get 'PORT' variable from .env file
const userRoutes = require('./routes/userRoutes') // importing 'router' as userRoutes from userRoutes.js
const app = express() // initiallise express as 'app'

// middleware section
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// handle top route
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to my first ever MERN app' })
})

// route handlers
app.use('/api/users', userRoutes)
app.listen(PORT, () => {
  console.log(`Server ruuning on port: ${PORT}`)
})
