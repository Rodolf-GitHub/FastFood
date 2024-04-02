const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const  sequelize  =require('./database/database');
const logger = require('./loggers/loggers');
const errorHandler = require('./middleWares/errorHandler');
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use('/', userRoutes);

app.use('/', productRoutes);
app.use('/', balanceRoutes);



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