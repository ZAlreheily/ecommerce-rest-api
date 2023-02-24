const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        itemId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            default: 1, required: true
        }
    }]
});

module.exports = mongoose.model("Cart", cartSchema);