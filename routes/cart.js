const router = require('express').Router();
const Cart = require('../models/Cart');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;

    try {
        const response = await Cart.findOne({ user: userID });
        if (response == null) {
            const err = new Error('Could not user with that ID');
            err.status = 404;
            return next(err);
        }
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

router.post('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;
    const newDetails = req.body;
    try {
        const response = await Cart.findOneAndUpdate(
            { user: userID },
            { $set: newDetails },
            {
                runValidators: true,
                new: true,
            }
        );

        if (response == null) {
            const err = new Error('Could not user with that ID');
            err.status = 404;
            return next(err);
        }
        res.status(201).json(response);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const userID = req.user;

    try {
        const response = await Cart.findOneAndDelete({ user: userID });

        if (response == null) {
            const err = new Error('Could not user with that ID');
            err.status = 404;
            return next(err);
        }
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

module.exports = router;