const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.mainPage)
    .get("/home", mainControllers.home)
    .get("/contact", mainControllers.contact)
    .get("/about", mainControllers.about)
    .get("/faqs", mainControllers.faqs)


module.exports = router;
