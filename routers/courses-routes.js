const express = require('express');
const routers = express.Router();
const stemController = require('../controllers/stem-courses-controller');

routers.get('/stem', stemController.stemView);

module.exports = routers;