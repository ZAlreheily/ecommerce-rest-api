const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: {type:String,require:true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    categories: [String],
    img: { type: String, required: true }
})

module.exports = mongoose.model("product", productSchema)