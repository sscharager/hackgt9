const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staff');



// put all endpoints here
router.post('/register', staffController.register);


module.exports = router;
