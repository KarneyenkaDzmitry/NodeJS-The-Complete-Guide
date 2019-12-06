const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin.js');

router.get('/add-product', controller.getAddProduct);
router.post('/add-product', controller.postAddProduct);
router.get('/products', controller.getProducts);
router.get('/edit-product/:productId', controller.editProduct);
router.post('/update-product/:productId', controller.postUpdateProduct);
router.delete('/delete-product/:productId', controller.getDeteteProduct);

module.exports = { router };
