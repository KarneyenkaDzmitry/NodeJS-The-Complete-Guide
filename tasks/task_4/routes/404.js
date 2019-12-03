const express = require('express');
const router = express.Router();
const join = require('path').join;

router.use((req, res, next) => {
    // res.sendFile(join(__dirname, '..', 'views', '404.html'));
    res.render('404', {
        pageTitle: '404: Page Not Found',
        message: 'Page Not Found!',
    });
});

module.exports = router;
