const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

router.get('/', authMiddleware, orderController.getOrders);

router.get('/:orderID', authMiddleware, orderController.getOrder);

router.post('/', authMiddleware, orderController.createOrder);

module.exports = router;