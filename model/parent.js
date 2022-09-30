const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db_config/database');

const Parent = sequelize.define("Parent", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relationship: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    whatsAppNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emergencyContact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    termsAndCondition: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
})


//create a table from model
Parent.sync()
    .then(() => {
        console.log("Parent table sucessfully created");
    })


module.exports = Parent;