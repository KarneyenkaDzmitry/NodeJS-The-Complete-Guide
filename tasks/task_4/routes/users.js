const express = require('express');
const router = express.Router();
const { join } = require('path');
const db = require('../db.js');

router.get('/users', (req, res, next) => {
    // res.sendFile(join(__dirname, '..', 'views', 'users.html'));
    res.render('users', {
        pageTitle: 'Users List',
        users: db,
        activeUsers: true,
        hasUsers: db.length > 0,
        message: 'No one user is created!',
    });
});

module.exports = router;
