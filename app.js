const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use(cors());

const  sequelize  =require('./database/database')
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log('Server listening on port: '+port)
    })
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();