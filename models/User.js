const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: { type: String, require: true },
    addresses: [{
        country: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
        zipcode: { type: Number, required: true },
        building: String,
        Apartment: String
    }],
    createDate: { default: Date.now(), immutable: true }
})

module.exports = mongoose.model("User", userSchema);