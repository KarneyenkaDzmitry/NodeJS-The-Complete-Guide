const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/shop.js');

router.get('/', controller.getShop);

module.exports = router;
