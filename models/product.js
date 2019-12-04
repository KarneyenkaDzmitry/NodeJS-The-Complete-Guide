const fs = require('fs');
const fsp = fs.promises;
const { join } = require('path');

const path = join(__dirname, '..', 'data', 'products.json');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    async save() {
        return fsp
            .access(path, fs.constants.W_OK | fs.constants.R_OK)
            .catch(err => {
                return fsp.writeFile(path, JSON.stringify([]));
            })
            .then(access => {
                return fsp.readFile(path, 'utf8');
            })
            .then(products => {
                products = JSON.parse(products);
                products.push(this);
                return products;
            })
            .then(products => fsp.writeFile(path, JSON.stringify(products)));
    }

    static fetchAll() {
        return fsp
            .access(path, fs.constants.W_OK | fs.constants.R_OK)
            .catch(err => {
                return fsp.writeFile(path, JSON.stringify([]));
            })
            .then(() => fsp.readFile(path, 'utf8'))
            .then(content => JSON.parse(content));
    }
};
