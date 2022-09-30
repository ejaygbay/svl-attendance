const express = require('express');
const routers = express.Router();
const dashboardController = require('../controllers/dashboard-controller');

routers.get('/', dashboardController.dashboardView);

module.exports = routers;