const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

// Register
router.post('/register', authController.register)

// Login
router.post('/login', authController.login)

// Logout
router.post('/logout', authController.logout)

// Get All Users (Admin only)
router.get('/', authController.getAllUsers)

// Get User by ID
router.get('/:id', authController.getUserById)

module.exports = router
