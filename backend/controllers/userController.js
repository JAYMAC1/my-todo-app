const expressAsyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel.js')

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body

  // check email and password
  if (!email || !password) {
    res.status(400)
    throw new Error('Please ensure all fields are filled')
  }
  res.status(200)
  res.json({ msg: 'login from userController' })
})

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // validate input
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('PLease ensure all fields are filled!')
  }

  // check for existing user
  const exists = await User.findOne({ email })

  if (exists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User data')
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  })
}

module.exports = {
  loginUser,
  registerUser,
}
