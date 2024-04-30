const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require('sequelize');
const logger = require("../loggers/loggers");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

// Prueba la conexión
async function testConnection() {
  try {
    sequelize.sync({ alter: true })
    await sequelize.authenticate();
     logger.info('Conexión exitosa');
  } catch (error) {
    logger.error('Error al conectar a la base de datos:', error);
  }
}

testConnection();
module.exports=sequelize;