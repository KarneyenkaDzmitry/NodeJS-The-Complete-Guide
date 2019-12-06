const fs = require('fs');
const fsp = fs.promises;
const { join } = require('path');

const path = join(__dirname, '..', 'data', 'products.json');

module.exports = class Product {
    constructor({ title, imageUrl, description, price }) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = Math.random().toString();
    }

    static dbAccess() {
        return fsp.access(path, fs.constants.F_OK).catch(err => {
            return fsp.writeFile(path, JSON.stringify([]));
        });
    }

    async save() {
        return this.constructor
            .dbAccess()
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
        return this.dbAccess()
            .then(() => fsp.readFile(path, 'utf8'))
            .then(content => JSON.parse(content));
    }

    static getById(sid) {
        return this.fetchAll().then(db => {
            return db.find(({ id }) => id === sid);
        });
    }

    static updateProduct(product) {
        return this.fetchAll()
            .then(db => {
                const index = db.findIndex(({ id }) => id === product.id);
                db[index] = product;
                return db;
            })
            .then(products => fsp.writeFile(path, JSON.stringify(products)));
    }
};
