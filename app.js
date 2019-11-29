const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In the next middleware!');
    res.send('<h2>Hello from Express<h2>');
});

const server = http.createServer(app);
// const router = require('./router.js');
// const server = http.createServer(router);
server.listen(3000);
