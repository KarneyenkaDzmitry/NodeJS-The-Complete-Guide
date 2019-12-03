const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('./admin').db;

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.render('shop', { prods: db, docTitle: 'Shop' });
});

module.exports = router;
