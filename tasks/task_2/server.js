const express = require('express');

const app = express();

app.use('/account', (req, res, next) => {
    res.send('<h1>Dummy Account Page<h1>');
});

app.use('/users', (req, res, next) => {
    res.send('<h1>Dummy Users Page<h1>');
});

app.use((req, res, next) => {
    console.log('The first funnel functions');
    next();
});

app.use((req, res, next) => {
    console.log('The second funnel functions');
    res.send('<h1>Welcome to Home Page</h1>');
});

app.listen(3000);
