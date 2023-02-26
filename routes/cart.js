const router = require('express').Router();
const Cart = require('../models/Cart');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;

    try {
        const response = await Cart.findOne({ user: userID });
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

router.post('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;
    const { productID } = req.body;
    try {
        const cart = await Cart.findOne({ user: userID });
        const products = cart.products;
        products.forEach(async (product) => {
            if (product.itemId == productID) {
                product.quantity += 1;
                await cart.save();
                res.status(201).json(cart);
            }
        });
        cart.products.push({ itemId: productID, quantity: 1 });
        await cart.save()
        res.status(201).json(cart);
    } catch (err) {
        next(err);
    }
});

router.delete('/:productID', authMiddleware, async (req, res, next) => {
    const userID = req.user;
    const { productID } = req.body;

    try {

        const cart = await Cart.findOne({ user: userID });
        const products = cart.products;
        let deletedProduct;
        products.forEach(async (product) => {
            if (product.itemId == productID) {
                return deletedProduct = product;
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
});

module.exports = router;