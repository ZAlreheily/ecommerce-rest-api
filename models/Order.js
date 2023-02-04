const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
    adress: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
        zipcode: { type: Number, required: true },
        building: String,
        Apartment: String
    },
    createDate: { default: Date.now(), immutable: true },
    items: [{
        item: { type: mongoose.SchemaTypes.ObjectId, ref: "Product", required: true },
        price: { type: Number, required: true, immutable: true },
        quantity: { type: Number, required: true, default: 1 }
    }],
    status: { type: String, default: "in progress" }

});

orderSchema.virtual("total").get(function () {
    let tmpTotal = 0
    this.items.array.forEach(element => {
        tmpTotal += element.price * element.quantity;
    });
    this.total = tmpTotal
});


module.exports = mongoose.Schema("Order", orderSchema);