const Product = require('../models/product.js');

module.exports.getAddProduct = (req, res, next) => {
    /**for default implementation */
    // res.sendFile(join(__dirname, '..', 'views', 'add-product.html'));

    /**for pug engine */
    // res.render('add-product', {
    //     path: '/admin/add-product',
    //     pageTitle: 'Add Product',
    // });

    /**for handlebars engine */
    // res.render('add-product', {
    //     path: '/admin/add-product',
    //     pageTitle: 'Add Product',
    //     hasProducts: db.length > 0,
    //     activeAddProd: true,
    //     productCSS: true,
    //     formCSS: true,
    // });

    /**for Ejs engine */
    res.render('admin/add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product',
    });
};

module.exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body);
    return product.save().then(() => res.redirect('/'));
};

exports.getProducts = (req, res, next) => {
    const Product = require('../models/product.js');
    return Product.fetchAll().then(products => {
        return res.render('admin/products', {
            prods: products,
            pageTitle: 'Products',
            path: '/admin/products',
        });
    });
};
