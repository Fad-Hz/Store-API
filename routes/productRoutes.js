const express = require('express')
const productController = require('../controllers/productController')
const { admin, token } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/', token, admin, productController.createProduct)
router.get('/', token, productController.getAllProducts)
router.get('/:id', token, productController.getProductById)
router.put('/:id', token, admin, productController.updateProduct)
router.delete('/:id', token, admin, productController.deleteProduct)

module.exports = router