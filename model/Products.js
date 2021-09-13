const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:String,
    price : String,
    details:String
}) 

module.exports = mongoose.model('Products',ProductSchema)


