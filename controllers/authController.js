const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Fungsi untuk generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    // Pastikan email belum terdaftar
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' })
    }

    // Set role pertama kali menjadi admin
    const role = (await User.countDocuments()) === 0 ? 'admin' : 'user'

    const user = new User({ name, email, password, role })
    await user.save()

    const token = generateToken(user._id)

    res.status(201)
      .cookie('token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict' 
      })
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    const isPasswordMatch = await user.matchPassword(password)
    if (!isPasswordMatch) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    const token = generateToken(user._id)

    res.status(200)
      .cookie('token', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict' 
      })
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Logout
exports.logout = (req, res) => {
  res.clearCookie('token')
  res.status(200).json({ message: 'Logged out successfully' })
}

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}