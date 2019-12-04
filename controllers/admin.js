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
    res.render('add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product',
    });
};

module.exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log(Product.fetchAll());
    res.redirect('/');
};
