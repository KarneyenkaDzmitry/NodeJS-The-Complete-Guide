const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
/**
 * When extended property is set to true,
 *  the URL-encoded data will be parsed with the qs library.
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
