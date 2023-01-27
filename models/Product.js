const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: {type:String,require:true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    catigories: [String]
})

module.exports = mongoose.model("product", productSchema)