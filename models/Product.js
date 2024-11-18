const { model, Schema } = require('mongoose')
const productsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nama product harus diisi']
    },
    price: {
        type: Number,
        required: [true, 'harga product harus diisi']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating setidaknya 0'],
        max: [5, 'Rating tidak boleh lebih dari 5'],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orders: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    }},
    {timestamps: true})

module.exports = model('Product', productsSchema)