const express = require('express');
const routers = express.Router();
const courseOutlineController = require('../controllers/computer-basics-outline-controller');

routers.get('/computer-basics', courseOutlineController.computerBasicOutlineView);

module.exports = routers;