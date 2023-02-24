const router = require('express').Router();
const Order = require('../models/Order');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;
    const orders = await Order.find({ user: userID });
    res.status(200).json(orders);
});

router.post('/', authMiddleware, async (req, res, next) => {
    const userID = req.user;
    const { address, items } = req.body;
    console.log(address)
    try {
        const newOrder = await Order.create({ user: userID, address:address, items:items });
        res.status(200).json(newOrder);
    } catch (err) {
        const error = new Error('Information was not in correct format.')
        error.status = 401;
        next(error);
    }
});


module.exports = router;