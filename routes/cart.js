const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

router.get('/', authMiddleware, cartController.getCartItems);

router.post('/', authMiddleware, cartController.addProductToCart);

router.delete('/:productID', authMiddleware, cartController.deleteCartItem);

module.exports = router;