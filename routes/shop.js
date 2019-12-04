const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop.js');

router.get('/', controller.getIndex);
router.get('/product-list', controller.getProductList);
router.get('/cart', controller.getCart);
router.get('/checkout', controller.getCheckout);

module.exports = router;
