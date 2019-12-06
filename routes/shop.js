const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop.js');

router.get('/', controller.getIndex);
router.get('/product-list', controller.getProductList);
router.get('/product/:productId', controller.getProduct);
router.get('/orders', controller.getOrders);
router.get('/cart', controller.getCart);
router.post('/cart', controller.postCart);
router.get('/checkout', controller.getCheckout);

module.exports = router;
