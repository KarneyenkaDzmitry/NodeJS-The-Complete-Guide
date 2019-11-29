const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/**
 * When extended property is set to true,
 *  the URL-encoded data will be parsed with the qs library.
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add-product', (req, res, next) => {
    res.send(`
    <form action="/product" method="post">
        <input type="text" name="title">
            <button type="submit">Add product</button>
        </input>
    </form>`);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h2>I feel good<h2>');
});

app.listen(3000);
