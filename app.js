const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const images = require('./routes/images');
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
app.use("/",images)
app.use('/', productRoutes);
app.use('/', balanceRoutes);
// Configuración de Swagger
const swaggerJSDoc = require("swagger-jsdoc");
const SwaggerUi = require("swagger-ui-express");
const SwaggerOptions = require("./swaggerConfig"); // Importa la configuración de Swagger
const configSwagger = swaggerJSDoc(SwaggerOptions);
app.use("/api/docs", SwaggerUi.serve, SwaggerUi.setup(configSwagger));


app.use(errorHandler);



async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      logger.info('Server listening on port: '+port)
     
    })
    
  } catch (error) {
    logger.error("Error when starting connection", error);
  }
}

main();