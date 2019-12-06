const Product = require('../models/product.js');
const Cart = require('../models/cart.js');

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

module.exports.postCart = (req, res, next) => {
    const id = req.body.productId;
    return Product.fetchAll()
        .then(products => products.find(({ id: pid }) => pid === id))
        .then(Cart.addProduct);
};

module.exports.getCheckout = (req, res, next) => {
    return res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};

module.exports.getOrders = (req, res, next) => {
    return res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
    });
};

module.exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    return Product.getById(id).then(product => {
        return res.render('shop/product-detail', {
            product,
            path: '/product-list',
            pageTitle: `Product ${product.title}`,
        });
    });
};
