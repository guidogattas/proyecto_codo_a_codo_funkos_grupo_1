const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get("/ping", (req, res) => res.send('pong'))



app.listen(port, () => {
    console.log(`Servidor ok en puerto ${port}`)
})
