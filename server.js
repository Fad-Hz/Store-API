const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes.js')
const companyRoutes = require('./routes/companyRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js')
const notFoundPage = require('./middlewares/index.js')

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/company', companyRoutes)
app.use('/api/order', orderRoutes)
app.use(notFoundPage)

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.DATABASE

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB Connected')
    app.listen(() => console.log(`http://localhost:${PORT}`))
  } catch (err) {
    console.log(err.message)
  }
}

startServer()