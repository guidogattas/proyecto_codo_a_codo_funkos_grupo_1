const ejs = require('ejs');
const { resolve } = require('path');

const authControllers = {
    getLogin: (req, res) => {
        res.render('pages/login.ejs')
    },
    postLogin: (req, res) => res.send('Route to Post Login View'),
    getRegister: (req, res) => {
        res.render('pages/register.ejs')
    },
    postRegister: (req, res) => res.send('Route to Post Register view'),
    getLogout: (req, res) => res.send('Route to Get Logout View'),

}

module.exports = authControllers;