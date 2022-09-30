const express = require('express');
const routers = express.Router();
const stemController = require('../controllers/stem-courses-controller');

routers.get('/courses', stemController.stemView);

routers.get('/courses/:course', stemController.selectedCourse);

routers.get('/computer_basic/:outline_item', stemController.selectCourseOutlineContent);

module.exports = routers;