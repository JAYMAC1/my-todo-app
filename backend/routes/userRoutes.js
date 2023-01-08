const express = require('express')

const router = express.Router()

router.get('/login', (req, res) => {
  res.status(200)
  res.json({ msg: 'connected to /api/users/login within userRoutes' })
})
router.get('/register', (req, res) => {
  res.status(200)
  res.json({ msg: 'connected to /api/users/register within userRoutes' })
})

module.exports = router
