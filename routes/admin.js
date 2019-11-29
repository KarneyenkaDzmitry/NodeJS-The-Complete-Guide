const express = require('express');
const { join } = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
