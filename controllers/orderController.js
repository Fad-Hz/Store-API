const Order = require('../models/Order.js')

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()
    res.status(201).json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!order) return res.status(404).json({ error: 'Order not found' })
    res.status(200).json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id)
    if (!order) return res.status(404).json({ error: 'Order not found' })
    res.status(200).json({ message: 'Order deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user products.product')
    if (!order) return res.status(404).json({ error: 'Order not found' })
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user products.product')
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}