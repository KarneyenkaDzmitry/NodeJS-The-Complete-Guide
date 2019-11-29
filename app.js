const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('It is always executed!');
    next();
});

app.use('/hello', (req, res, next) => {
    console.log('In the next middleware!');
    res.send('<h2>Hello from Express<h2>');
});

app.use('/health', (req, res, next) => {
    console.log('In the health middleware!');
    res.send('<h2>I feel good<h2>');
});

app.listen(3000);
