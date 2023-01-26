const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: { type: String, required: true },
    address: { country: String, city: String, street: String, zipcode: Number}
})

module.exports = userSchema.model("User", userSchema);