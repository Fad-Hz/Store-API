const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({ success: true, data: product })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: product })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: product })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}