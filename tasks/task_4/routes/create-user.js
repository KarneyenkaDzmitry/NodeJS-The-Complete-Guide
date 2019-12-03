const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db.js');

router.get('/create-user', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'create-user.html'));
    res.render('create-user', {
        pageTitle: 'Create User Page',
        activeCrUser: true,
    });
});

router.post('/create-user', (req, res, next) => {
    db.push(req.body);
    console.log(db);
    res.redirect('/users');
});

module.exports = router;
