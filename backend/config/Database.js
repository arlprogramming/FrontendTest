import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql", //dbms yang digunakan
});

export default db;
