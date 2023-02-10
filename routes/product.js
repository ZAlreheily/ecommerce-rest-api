const router = require("express").Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
});

router.get("/:id", async (req, res, next) => {
    const productId = req.params.id;
    const isValidId = mongoose.isValidObjectId(productId)

    if (!isValidId) {
        const err = new Error("ID is not valid.");
        err.status = 400;
        return next(err);
    }

    try {
        const product = await Product.findById(productId);
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
});

router.post("/", async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", (req, res) => {

});

router.put("/id", (req, res) => {

});

module.exports = router;