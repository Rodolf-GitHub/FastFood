const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Balance = sequelize.define('Balance', {
 
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = Balance;
