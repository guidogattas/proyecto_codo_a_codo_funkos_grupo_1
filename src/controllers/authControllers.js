const ejs = require('ejs');
const { resolve } = require('path');

const authControllers = {
    getLogin: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/login.ejs');
        res.send(index)
    },
    postLogin: (req, res) => res.send('Route to Post Login View'),
    getRegister: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/register.ejs');
        res.send(index)
    },
    postRegister: (req, res) => res.send('Route to Post Register view'),
    getLogout: (req, res) => res.send('Route to Get Logout View'),

}

module.exports = authControllers;