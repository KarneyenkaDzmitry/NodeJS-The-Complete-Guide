const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/create-user', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'create-user.html'));
});

router.post('/create-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/users');
});

module.exports = router;
