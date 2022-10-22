const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room');

// put all endpoints here
router.post('/scanQR', roomController.scanQR);

module.exports = router;
