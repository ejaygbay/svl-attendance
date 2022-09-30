const express = require('express');
const routers = express.Router();
const servicesController = require('../controllers/services-controllers');

routers.get('/qrcode', servicesController.qrCode);
routers.get('/generate', servicesController.generateQRCodeView);
routers.post('/generate', servicesController.generateQRCode);



module.exports = routers;