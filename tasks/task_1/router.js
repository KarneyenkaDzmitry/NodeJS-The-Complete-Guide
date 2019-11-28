const fs = require('fs');
const { join, resolve } = require('path');
const path = resolve('.', join('tasks', 'task_1', 'pages'));

const pages = {
    home: fs.readFileSync(join(path, 'home.html')),
    users: fs.readFileSync(join(path, 'users.html')),
    'create-user': fs.readFileSync(join(path, 'create-user.html')),
    error: fs.readFileSync(join(path, 'error.html')),
};

const handler = (req, res) => {
    const { url, method, headers } = req;
    const body = [];

    if ((url === '/create-user') & (method === 'POST')) {
        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location', '/create-user');
            res.end();
        });
    }

    switch (url) {
        case '/':
            res.write(pages.home);
            break;
        case '/users':
            res.write(pages.users);
            break;
        case '/create-user':
            res.write(pages['create-user']);
            break;
        default:
            res.write(pages.error);
    }

    return res.end();
};

module.exports = handler;
