const express = require('express')
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController')
const { token, admin } = require('../middlewares/authMiddleware')

const router = express.Router()

// POST - Create Product
router.post('/', token, admin, createProduct)

// GET - Get All Products
router.get('/', token, getAllProducts)

// GET - Get Product by ID
router.get('/:id', token, getProductById)

// PUT - Update Product by ID
router.put('/:id', token, admin, updateProduct)

// DELETE - Delete Product by ID
router.delete('/:id', token, admin, deleteProduct)

module.exports = router
