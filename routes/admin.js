const express = require('express');
const { join } = require('path');
const db = [];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    /**for default implementation */
    // res.sendFile(join(__dirname, '..', 'views', 'add-product.html'));

    /**for pug engine */
    // res.render('add-product', {
    //     path: '/admin/add-product',
    //     pageTitle: 'Add Product',
    // });

    /**for handlebars engine */
    res.render('add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product',
        hasProducts: db.length > 0,
        activeAddProd: true,
        productCSS: true,
        formCSS: true,
    });
});

router.post('/add-product', (req, res, next) => {
    db.push(req.body);
    console.log(db);
    res.redirect('/');
});

module.exports = { router, db };
