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
    return Product.fetchAll().then(products => {
        return res.render('admin/products', {
            prods: products,
            pageTitle: 'Products',
            path: '/admin/products',
        });
    });
};

exports.editProduct = (req, res, next) => {
    return Product.fetchAll()
        .then(products => products.find(({ id }) => id == req.params.productId))
        .then(product => {
            return res.render('admin/edit-product', {
                product,
                pageTitle: `Edit Product: ${product.id}`,
                path: req.url,
            });
        });
};

exports.postUpdateProduct = (req, res, next) => {
    const id = req.params.productId;
    const product = { ...req.body, id };
    console.log(product);
    return Product.updateProduct(product).then(product =>
        res.redirect('/admin/products')
    );
};
