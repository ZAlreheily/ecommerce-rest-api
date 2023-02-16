
const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    User: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
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
});

module.exports = mongoose.model("Address", addressSchema);