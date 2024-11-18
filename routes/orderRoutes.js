const express = require('express')
const orderController = require('../controllers/orderController')
const { token } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/', token, orderController.createOrder)
router.get('/', token, orderController.getAllOrders)
router.get('/:id', token, orderController.getOrderById)
router.put('/:id', token, orderController.updateOrder)
router.delete('/:id', token, orderController.deleteOrder)

module.exports = router