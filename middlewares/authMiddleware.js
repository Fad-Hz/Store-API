const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Middleware untuk melindungi route (cek apakah token ada)
const protect = async (req, res, next) => {
  let token
  if (req.cookies.token) {
    token = req.cookies.token
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    next()
  } catch (err) {
    res.status(401).json({ error: 'Not authorized, token failed' })
  }
}

// Middleware untuk admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(403).json({ error: 'Not authorized as an admin' })
  }
}

module.exports = { protect, admin }