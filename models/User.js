const mongoose = require("mongoose");
const Cart = require("./Cart");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    addresses: [{
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        },
        building: String,
        Apartment: String
    }],
    createDate: {
        type: Number,
        default: Date.now(),
        immutable: true
    }
})

userSchema.post('init', function (doc) {
    Cart.create({ user: doc._id });
});

module.exports = mongoose.model("User", userSchema);