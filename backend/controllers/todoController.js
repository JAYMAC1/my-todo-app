// GET request to pull all todos
const getTodos = (req, res) => {
  res.status(200)
  res.json({ msg: 'GET all todos' })
}

// POST single todo by ID
const createTodo = (req, res) => {
  res.status(200)
  res.json({ msg: 'POST create new todo' })
}

// DELETE request to delete a single todo
const deleteTodo = (req, res) => {
  res.status(200)
  res.json({ msg: 'DELETE request to delete a single todo' })
}

const getTodo = (req, res) => {
  res.status(200)
  res.json({ msg: 'GET single todo by ID' })
}

// PATCH request to update a single todo
const updateTodo = (req, res) => {
  res.status(200)
  res.json({ msg: 'PATCH request to update a single todo' })
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
}
