const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {
        message: 'Welcome!',
        activeHome: true,
        pageTitle: 'Home Page',
    });
});

module.exports = router;
