const express = require('express')
const app = express()
const port=3000

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', userRoutes);
app.use('/', productRoutes);

app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: '+port)
})
import { sequelize } from "./database/database.js";
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("Server is listening on port", 3000);
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();