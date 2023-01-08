const loginUser = (req, res) => {
  res.status(200)
  res.json({ msg: 'login from userController' })
}

const registerUser = (req, res) => {
  res.status(200)
  res.json({ msg: 'register from userController' })
}

module.exports = {
  loginUser,
  registerUser,
}
