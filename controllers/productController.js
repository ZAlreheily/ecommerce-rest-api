const Product = require("../models/Product");
const mongoose = require("mongoose");
const { idFormatError, productNotFoundError } = require("../helpers/dbHelper");

exports.getProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
};

exports.getProduct = async (req, res, next) => {
    const productId = req.params.id;
    const isValidId = mongoose.isValidObjectId(productId)

    if (!isValidId) {
        return next(idFormatError());
    }

    try {
        const product = await Product.findById(productId);
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
};

exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    const productId = req.params.id;
    const isValidId = mongoose.isValidObjectId(productId);

    if (!isValidId) {
        return next(idFormatError());
    }

    try {
        const response = await Product.findByIdAndDelete(productId);

        if (response == null) {
            return next(productNotFoundError());
        }

        res.status(200).send(response)
    } catch (err) {
        next(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    const productId = req.params.id;
    const newDetails = req.body;
    const isValidId = mongoose.isValidObjectId(productId);

    if (!isValidId) {
        return next(idFormatError());
    }

    try {
        const response = await Product.findByIdAndUpdate(
            productId,
            { $set: newDetails },
            {
                runValidators: true,
                new: true,
            }
        );

        if (response == null) {
            return next(productNotFoundError());
        }

        res.status(200).json(newProduct);
    } catch (err) {
        next(err);
    }
};