const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", (req, res) => {

})

router.get("/:id", (req, res) => {
    
})

router.post("/", async (req, res) => {
    const product = new Product(req.body);
    try{
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", (req, res) => {
    
})

router.put("/id", (req, res) => {
    
})