const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products: [{
        itemId: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1, required: true }
    }]
});

module.exports = mongoose.model("Cart", cartSchema);