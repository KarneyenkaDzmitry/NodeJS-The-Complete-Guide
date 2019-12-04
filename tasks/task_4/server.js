const express = require('express');
const bodyParser = require('body-parser');
const join = require('path').join;

const handlebars = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    handlebars({
        layoutsDir: join(__dirname, 'views', 'layouts'),
        defaultLayout: 'main.hbs',
    })
);

app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));
const homeRoutes = require('./routes/home.js');
const usersRoutes = require('./routes/users.js');
const createUserRoutes = require('./routes/create-user.js');
const errorRoutes = require('./routes/404.js');
app.use(bodyParser.urlencoded({ extended: true }));

app.use([homeRoutes, usersRoutes, createUserRoutes, errorRoutes]);

app.listen(3000);