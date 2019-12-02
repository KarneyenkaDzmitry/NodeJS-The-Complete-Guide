const express = require('express');
const router = express.Router();
const join = require('path').join;

router.use((req, res, next) => {
    res.sendFile(join(__dirname, '..', 'views', '404.html'));
});
module.exports = router;
