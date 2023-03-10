const Cart = require('../models/Cart');

exports.getCartItems = async (req, res, next) => {
    const userID = req.user;

    try {
        const response = await Cart.findOne({ user: userID });
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

exports.addProductToCart = async (req, res, next) => {
    const userID = req.user;
    const { productID } = req.body;
    try {
        const cart = await Cart.findOne({ user: userID });
        const products = cart.products;
        let modifiedProduct;

        products.forEach(async (product) => {
            if (product.itemId == productID) {
                product.quantity += 1;
                modifiedProduct = product;
            }
        });

        if (!modifiedProduct) {
            cart.products.push({ itemId: productID, quantity: 1 });
        }

        await cart.save()
        res.status(201).json(cart);
    } catch (err) {
        next(err);
    }
};

exports.deleteCartItem = async (req, res, next) => {
    const userID = req.user;
    const { productID } = req.body;

    try {

        const cart = await Cart.findOne({ user: userID });
        const products = cart.products;
        let deletedProduct;
        products.forEach(async (product) => {
            if (product.itemId == productID) {
                deletedProduct = product;
            }
        });

        if (deletedProduct) {
            const index = products.indexOf(deletedProduct);
            cart.products.splice(index, 1);
            await cart.save();
            res.status(200).json(cart);

        } else {

            const error = new Error('No item with that id is in cart.');
            error.status = 401;
            next(error);
        }

    } catch (err) {
        next(err);
    }
};