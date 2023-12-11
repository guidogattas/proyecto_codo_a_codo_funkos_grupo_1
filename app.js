const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')
const { resolve } = require('path')



app.set('view engine', 'ejs')
app.set('views', resolve() + '/src/views')


app.use(express.static('public'))




app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)

app.use((req, res) => {
    res.status(404).render('pages/error404.ejs');
});

app.listen(port, () => {
    console.log(`Servidor ok en puerto ${port}`)
})
