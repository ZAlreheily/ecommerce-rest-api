const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products: [{
        itemId: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1, required: true }
    }]
});

// cartSchema.method.addQuantity(function(quantity, productId){
//     let tmpQuantity = this.quantity + quantity;
//     let product = this.products.find(obj => obj.itemId == productId)
//     if (product == undefined){
//         new Error("No product with that id is in card");
//     }
//     if (tmpQuantity > ){

//     }
//     product.quantity = tmpQuantity;
// })

module.exports = mongoose.model("Cart", cartSchema);