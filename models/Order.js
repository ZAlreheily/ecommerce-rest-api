const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
    item: { type: mongoose.SchemaTypes.ObjectId, ref: "Product", required: true },
    price: { type: Number, required: true, immutable: true },
    quantity: { type: Number, required: true, default: 1 }
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
    // adress: {type:mongoose.SchemaTypes.ObjectId,ref:"Adress",required:true},
    createDate: { default: Date.now(), immutable: true },
    items: [orderItemSchema],
    status: { type: String, defult: "in progress" }
});

orderSchema.pre("save", function (next) {
    let tmpTotal = 0
    items.array.forEach(element => {
        tmpTotal += element.price * element.quantity;
    });
    this.total = tmpTotal
    next()
})


module.exports = mongoose.Schema("Order", orderSchema);