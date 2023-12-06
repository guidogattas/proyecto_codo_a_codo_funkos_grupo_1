const ejs = require('ejs');
const { resolve } = require('path');

const shopControllers = {
    shopView: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/shop.ejs');
        res.send(index)
    },
    itemView: async (req, res) => {
        // const id = req.params.id;
        // res.send(`Route to find the item with id: ${id}`)
        const index = await ejs.renderFile(resolve() + '/src/views/item.ejs');
        res.send(index)
    },
    addItem: (req, res) => res.send('Route to add the current item to the shop cart'),
    cartView: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/cart.ejs');
        res.send(index);
    },
    checkoutView: (req, res) => res.send('Route to go to checkout page'),
}

module.exports = shopControllers