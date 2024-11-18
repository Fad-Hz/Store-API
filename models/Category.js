const {model, Schema} = require('mongoose')
const categorySchema = new Schema({
    name: {type: String, required: true},
    desc: String
})

module.exports = model('category', categorySchema)