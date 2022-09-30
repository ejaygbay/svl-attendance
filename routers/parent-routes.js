const express = require('express');
const routers = express.Router();
const parentsController = require('../controllers/parent-controller');
const Parent = require('../model/parent');

// routers.get('/parents', membersController.getAllMembers);
routers.post('/parents', parentsController.createNewParent);






module.exports = routers;