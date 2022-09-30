const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db_config/database');

const Role = sequelize.define("Role", {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Role.sync()
    .then(() => {
        console.log("Role table has been created");
    })

module.exports = Role;