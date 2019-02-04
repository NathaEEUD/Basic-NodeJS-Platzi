const express = require('express')
const app = express()

app.get('/app', (req, res) => {
    res.send('Estoy en la ruta /app')
})
app.get('/', (req, res) => {
    res.send('Estoy en la ruta HOME')
})
app.get('*', (req, res) => {
    res.send('No sé donde estoy!')
})

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000')
})