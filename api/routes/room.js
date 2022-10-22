const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room');

// put all endpoints here
router.post('/sendText', roomController.sendText);
router.get('/addMember', roomController.addMember);


module.exports = router;
