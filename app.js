const express = require('express')
const app = express()
const port=3000

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!')
})
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: '+port)
})
