const express = require('express');
const router = express.Router();
const { join } = require('path');

router.get('/users', (req, res, next) => {
    res.sendFile(join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;
