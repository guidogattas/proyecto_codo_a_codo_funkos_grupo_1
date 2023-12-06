const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/', adminControllers.adminView)
    .get('/create', adminControllers.adminCreateView)
    .post('/create', adminControllers.adminCreatePost)
    .get('/edit:id', adminControllers.adminEditIdView)
    .put('/edit:id', adminControllers.adminEditPutView)
    .delete('/delete:id', adminControllers.adminDeleteIdView)


module.exports = router