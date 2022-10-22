const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room');

// put all endpoints here
router.post('/sendText', roomController.sendText);
router.get('/addMember', roomController.addMember);
router.post('/getAvailableRooms', roomController.getAvailableRooms);
router.post('/getSingleRoom', roomController.getSingleRoom);

module.exports = router;
