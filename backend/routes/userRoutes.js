const express = require('express')
const router = express.Router()
const { loginUser, registerUser } = require('../controllers/userController')

router.get('/login', loginUser)
router.post('/register', registerUser)

module.exports = router
