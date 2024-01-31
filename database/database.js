import Sequelize from "sequelize";

export const sequelize = new Sequelize("fastFoodDB", "mysql", "010103", {
  host: "localhost",
  dialect: "mysql",
});
