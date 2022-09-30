// import sequelize 
const Sequelize = require('sequelize');

// create an instance and connect db 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './lms.db'
});


// verify that the database is connected
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;