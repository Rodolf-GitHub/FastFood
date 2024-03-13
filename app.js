const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const  sequelize  =require('./database/database');
const logger = require('./loggers/loggers');
const errorHandler = require('./middleWares/errorHandler');

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use(cors());

// Usa el middleware de manejo de errores al final de la cadena de middleware
app.use(errorHandler);


async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      logger.info('Server listening on port: '+port)
      
    })
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();