const fs = require('fs');
const path = require('path');

const pages = {
    home: fs.readFileSync('./tasks/task_1/pages/home.html'),
    users: fs.readFileSync('./tasks/task_1/pages/users.html'),
};

const handler = (req, res) => {
    const { url, method } = req;

    switch (url) {
        case '/':
            res.write(pages.home);
            break;
        case '/users':
            res.write(pages.users);
            break;
        default:
            res.write(pages.home);
    }

    return res.end();
};

module.exports = handler;
