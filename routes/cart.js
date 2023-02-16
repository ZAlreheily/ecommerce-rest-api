const router = require("express").Router();
const Cart = require("../models/Cart");

router.get("/", async (req, res, next) => {
    const userID = "";         // To be Implemented

    try {
        const response = await Cart.findOne({ user: userID });
        if (response == null) {
            const err = new Error("Could not user with that ID");
            err.status = 404;
            return next(err);
        }
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    const userID = "";         // To be Implemented
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
            const err = new Error("Could not user with that ID");
            err.status = 404;
            return next(err);
        }
        res.status(201).json(response);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res) => {
    const userID = "";         // To be Implemented

    try {
        const response = await Cart.findOneAndDelete({ user: userID });

        if (response == null) {
            const err = new Error("Could not user with that ID");
            err.status = 404;
            return next(err);
        }
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

module.exports = router;