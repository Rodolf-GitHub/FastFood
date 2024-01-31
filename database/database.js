const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

// Prueba la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testConnection();
