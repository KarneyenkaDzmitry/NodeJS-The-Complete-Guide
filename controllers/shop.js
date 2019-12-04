const Product = require('../models/product.js');

module.exports.getProductList = (req, res, next) => {
    /**for default implementation */
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

    /**for pug engine */
    // res.render('shop', {
    //     prods: db,
    //     docTitle: 'Shop',
    //     path: '/',
    //     pageTitle: 'Shop',
    // });

    /**for handlebars engine */
    // res.render('shop', {
    //     prods: db,
    //     docTitle: 'Shop',
    //     path: '/',
    //     pageTitle: 'Shop',
    //     hasProducts: db.length > 0,
    //     activeShop: true,
    //     productCSS: true,
    //     /**to Not Use A layout set the property - layout: false,*/
    // });

    /**for Ejs engine */
    return Product.fetchAll().then(products => {
        return res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Product-List',
            path: '/product-list',
        });
    });
};

module.exports.getIndex = (req, res, next) => {
    return Product.fetchAll().then(products => {
        return res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

module.exports.getCart = (req, res, next) => {
    return res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    });
};

module.exports.getCheckout = (req, res, next) => {
    return res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};
