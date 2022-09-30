const { Sequelize, DataTypes } = require('sequelize');
const Parent = require('../model/parent');
const sequelize = require('../db_config/database');

const Member = sequelize.define("Member", {
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
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countyOfOrigin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentSchool: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentClass: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // image: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // membershipPlan: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // }
});

// create associations or foreign key 
Parent.hasMany(Member, {
    foreignKey: { name: "ParentId", field: "ParentId", allowNull: true }
});
Member.belongsTo(Parent);

//create a table from model
Member.sync()
    .then(() => {
        console.log("Member table sucessfully created");
    });




module.exports = Member;





// {
//     "first_name":"Samuel",
//     "middle_name":"Kenya",
//     "last_name":"Doe",
//     "user_name":"sdoe",
//     "gender":"male",
//     "relationship":"Father",
//     "phone":"0770322706",
//     "email":"boakaidkamara@gmail.com",
//     "date_of_birth":"Januay 15, 1847",
//     "location":"Barnersville",
//     "county_of_origin":"Lofa",
//     "current_school":"ELWA School",	"current_class":"5th Grade",
//     "image":"https://avatars.githubusercontent.com/u/52508120?v=4",
//     "membership":"E Membership",
//     "terms_and_condition":"true"
//     }