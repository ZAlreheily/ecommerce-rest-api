const Order = require('../models/Order');

exports.getOrders = async (req, res, next) => {
    const userID = req.user;
    const orders = await Order.find({ user: userID });
    res.status(200).json(orders);
};

exports.getOrder = async (req, res, next) => {
    const userID = req.user;
    const { orderID } = req.params;
    try {
     const order = await Order.findOne({ _id: orderID });
        if (userID != order.user){
            const err = new Error('You are not authorized to get order information.');
            err.status = 403;
            return next(err);
        }
        res.status(200).json(order);
    } catch (err){
        next(err);
    }

};

exports.createOrder = async (req, res, next) => {
    const userID = req.user;
    const { address, items } = req.body;
    try {
        const newOrder = await Order.create({ user: userID, address: address, items: items });
        res.status(200).json(newOrder);
    } catch (err) {
        const error = new Error('Information was not in correct format.')
        error.status = 401;
        next(error);
    }
};