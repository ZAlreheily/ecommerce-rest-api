const router = require("express").Router();
const productController = require('../controllers/productController');

router.get("/", productController.getProducts);

router.get("/:id",productController.getProduct );

router.post("/", productController.addProduct);

router.delete("/:id", productController.deleteProduct);

router.put("/:id", productController.updateProduct);

module.exports = router;