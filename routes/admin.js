const express = require('express');
const { join } = require('path');

const controller = require('../controllers/admin.js');

const router = express.Router();

router.get('/add-product', controller.getAddProduct);

router.post('/add-product', controller.postAddProduct);

module.exports = { router };
