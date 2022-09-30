const express = require('express');
const routers = express.Router();
const computerBasicsAboutController = require('../controllers/computer-basics-about-controller');

routers.get('/computer-basics/about', computerBasicsAboutController.computerBasicsAboutView);



module.exports = routers;