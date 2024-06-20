import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('users', 'root', 'qqq123', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('Połączono z bazą');
  })
  .catch(error => {
    console.error('Coś poszło nie tak', error);
  });

export const Users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    }
})

sequelize.sync()
    .then(() => {
        console.log("Database is sync");
    })
    .catch((error) => {
        console.log("Coś poszło nie tak: " + error);
    })