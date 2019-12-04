const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin.js');

router.get('/add-product', controller.getAddProduct);
router.post('/add-product', controller.postAddProduct);
router.get('/products', controller.getProducts);

module.exports = { router };
