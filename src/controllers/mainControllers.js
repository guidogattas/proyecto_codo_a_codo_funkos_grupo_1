const ejs = require('ejs');
const { resolve } = require('path');

const mainControllers = {
    mainPage: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/index.ejs');
        res.send(index)
    },
    home: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/index.ejs');
        res.send(index)
    },
    contact: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/contact.ejs');
        res.send(index)
    },

    about: (req, res) => res.send('Route for About View'),

    faqs: (req, res) => res.send('Route for Faqs View'),
}

module.exports = mainControllers;