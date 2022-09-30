const express = require('express');
const routers = express.Router();
const membersController = require('../controllers/members-controller');
const Member = require('../model/membership');

routers.get('/api_guide', membersController.displayUsageGuide)
routers.get('/members', membersController.getAllMembers);
routers.post('/members', membersController.createNewMember);
// routers.get('/members/:id', membersController.getSpecificMember);
// routers.get('/member/:username', membersController.getSpecificMember);
routers.put('/members/:id', membersController.updateSpecificMember);
routers.delete('/members/:id', membersController.deleteSpecificMember);

//display ejs files
routers.get("/members/create", membersController.displayNewMemberForm);
routers.get("/members/get", membersController.displayMembersTable);






module.exports = routers;