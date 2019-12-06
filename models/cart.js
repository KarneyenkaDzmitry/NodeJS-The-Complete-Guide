const fs = require('fs');
const fsp = fs.promises;
const { join } = require('path');

const path = join(__dirname, '..', 'data', 'cart.json');

module.exports = class Cart {
    static dbAccess() {
        return fsp.access(path, fs.constants.F_OK).catch(err => {
            return fsp.writeFile(
                path,
                JSON.stringify({ products: [], totalPrice: 0 })
            );
        });
    }
    static addProduct({ id, price }) {
        return Cart.dbAccess()
            .then(access => {
                return fsp.readFile(path, 'utf8');
            })
            .then(cart => {
                cart = JSON.parse(cart);
                const index = cart.products.findIndex(
                    ({ id: cid }) => cid == id
                );
                if (index > -1) cart.products[index].items++;
                else cart.products.push({ id, items: 1 });
                cart.totalPrice = +cart.totalPrice + +price;
                return cart;
            })
            .then(cart => fsp.writeFile(path, JSON.stringify(cart)));
    }

    static fetchCart() {
        return Cart.dbAccess()
            .then(() => fsp.readFile(path, 'utf8'))
            .then(content => JSON.parse(content));
    }
};
