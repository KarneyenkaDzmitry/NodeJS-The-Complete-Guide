const express = require('express');
const { join } = require('path');
const db = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.sendFile(join(__dirname, '..', 'views', 'add-product.html'));
    res.render('add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product',
    });
});

router.post('/add-product', (req, res, next) => {
    db.push(req.body);
    console.log(db);
    res.redirect('/');
});

module.exports = { router, db };
