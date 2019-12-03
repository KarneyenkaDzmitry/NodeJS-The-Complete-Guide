const express = require('express');
const { join } = require('path');
const db = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    db.push(req.body);
    console.log(db);
    res.redirect('/');
});

module.exports = router;
