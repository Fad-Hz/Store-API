const { model, Schema } = require('mongoose')

const CompanySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String }
})

module.exports = model('Company', CompanySchema)