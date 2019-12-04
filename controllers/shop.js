const Product = require('../models/product.js');

module.exports.getShop = (req, res, next) => {
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
    res.render('shop', {
        prods: Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/',
    });
};
