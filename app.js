const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
/**
 * When extended property is set to true,
 *  the URL-encoded data will be parsed with the qs library.
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(join(__dirname, 'views', '404.html'));
});

app.listen(3000);
