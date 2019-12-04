const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controllers/404.js');

/**
 * plug in different render engins to the project:
 * 1. Pug engine;
 * 2. Handlebars;
 * 3. EJS.
 */
/**1. */
//app.set('view engine', 'pug');
/**2. */
// const handlebars = require('express-handlebars');
// app.engine('hbs', handlebars());
// add layouts
// app.engine(
//     'hbs',
//     handlebars({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main.layout.hbs',
//     })
// );
// app.set('view engine', 'hbs');
/**3. */
app.set('view engine', 'ejs');
/** end */

app.set('views', 'views');

const adminRoutes = require('./routes/admin.js').router;
const shopRoutes = require('./routes/shop.js');

app.use(express.static(join(__dirname, 'public')));
/**
 * When extended property is set to true,
 *  the URL-encoded data will be parsed with the qs library.
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(controller.getError);

app.listen(3000);
