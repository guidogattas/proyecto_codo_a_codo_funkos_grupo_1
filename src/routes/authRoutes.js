const express = require('express')
const router = express.Router()

const authControllers = require('../controllers/authControllers')

const { getLogin, postLogin, getRegister, postRegister, getLogout } = authControllers


router
    .get('/login', getLogin)
    .post('/login', postLogin)
    .get('/register', getRegister)
    .post('/register', postRegister)
    .get('/logout', getLogout)


module.exports = router
