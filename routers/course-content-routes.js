const express = require('express');
const routers = express.Router();
const courseContentController = require('../controllers/course-content-controller');

routers.get('/course-content', courseContentController.courseContentView );

module.exports = routers;