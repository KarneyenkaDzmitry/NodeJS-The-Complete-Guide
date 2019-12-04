module.exports.getError = (req, res, next) => {
    // res.status(404).sendFile(join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        path: req.url,
        pageTitle: '404: Not Found',
    });
};
