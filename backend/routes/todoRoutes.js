const express = require('express')
const router = express.Router()
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todoController')

// GET request to pull all todos
router.get('/', getTodos)

// POST request to pull all todos
router.post('/', createTodo)

// GET request a single todo by ID
router.get('/:id', getTodo)

// POST request to add a new todo
router.delete('/:id', deleteTodo)

// PATCH request to update a todo by ID
router.patch('/:id', updateTodo)

module.exports = router
