const express = require('express');
const app = express();
const port = 3000;
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')
const { resolve } = require('path')
const fs = require('fs');


app.set('view engine', 'ejs')
app.set('views', resolve() + '/src/views')


app.use(express.static('public'))

const funkoData = JSON.parse(fs.readFileSync(resolve() + "/src/data/funko.json", 'utf-8'))


app.use((req, res, next) => {
    res.locals.funkoData = funkoData;
    next();
});

app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`Servidor ok en puerto ${port}`)
})
