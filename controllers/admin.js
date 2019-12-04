const db = [];

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
    db.push(req.body);
    console.log(db);
    res.redirect('/');
};

module.exports.db = db;
