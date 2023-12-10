const express = require('express')
const router = express.Router()
const shopControllers = require('../controllers/shopControllers')




router.get('/', shopControllers.shopView)
    .get('/collection/:collectionName', shopControllers.shopView)
    .get('/item/:id', shopControllers.itemView)
    .post('/item/:id/add', shopControllers.addItem)
    .get('/cart', shopControllers.cartView)

    .post('/cart', shopControllers.checkoutView)


module.exports = router