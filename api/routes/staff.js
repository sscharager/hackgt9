const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staff');



// put all endpoints here
router.post('/register', staffController.register);
router.post('/login', staffController.login);
router.post('/createRoom', staffController.createRoom);
router.post('/getRooms', staffController.getRooms);

module.exports = router;
