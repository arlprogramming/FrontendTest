import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize; //fungsi dari sequelize

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

//Function untuk mengenerate jika table user tidak ada di database
(async () => {
  await db.sync();
})();
