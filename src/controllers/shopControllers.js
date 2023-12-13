const funkoData = require('../loaders/funkoLoader')


const shopControllers = {
    shopView: (req, res) => {
        let filteredCollection;
        if (req.params.collectionName) {
            const collectionName = req.params.collectionName;
            filteredCollection = funkoData.filter(item => item.collection_name === collectionName);
        } else {
            filteredCollection = funkoData;
        }
        res.render('pages/shop.ejs', { collection: filteredCollection });
    },
    itemView: (req, res) => {
        const id = req.params.id;
        const item = funkoData.find(item => item.product_id == id);
        res.render('pages/item.ejs', { item: item, funkoData: funkoData })
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