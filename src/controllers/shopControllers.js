const fs = require('fs');
const { resolve } = require('path');

const funkoData = JSON.parse(fs.readFileSync(resolve() + "/src/data/funko.json", 'utf-8'));

const shopControllers = {
    shopView: (req, res) => {
        let filteredCollection;
        if (req.params.collectionName) {
            const collectionName = req.params.collectionName;
            filteredCollection = funkoData.filter(item => item.collection_name === collectionName);
        } else {

            filteredCollection = funkoData;
        }

        const collectionTitle = filteredCollection.length > 0 ? filteredCollection[0].licence_name.toUpperCase() : '';

        res.render('pages/shop.ejs', { collection: filteredCollection, collectionTitle });
    },
    itemView: (req, res) => {
        const id = req.params.id;
        const item = funkoData.filter(item => item.product_id == id);
        res.render('pages/item.ejs', { item: item })
    },
    collection: (req, res) => {
        const collectionName = req.params.collectionName;
        const filteredCollection = funkoData.filter(item => item.collection_name === collectionName);

        res.render('pages/collection.ejs', { collection: filteredCollection });
    },
    addItem: (req, res) => res.send('Route to add the current item to the shop cart'),
    cartView: (req, res) => {
        res.render('pages/cart.ejs')
    },
    checkoutView: (req, res) => res.send('Route to go to checkout page'),
}

module.exports = shopControllers