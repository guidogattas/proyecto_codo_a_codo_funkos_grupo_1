const funkoData = require('../loaders/funkoLoader')

const mainControllers = {
    mainPage: (req, res) => {
        res.render('index', { funkoData: funkoData });
    },
    home: (req, res) => {
        res.render('index', { funkoData: funkoData });
    },
    contact: (req, res) => {
        res.render('pages/contact.ejs')
    },
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View'),
}

module.exports = mainControllers;