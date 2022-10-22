// Create and configure MongoDB connection with mongoose
const C = require('./constants.js');
const app = require('./app');
const mongoose = require('mongoose');
const Room = require('./api/controllers/room');

mongoose.connect(C.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up loop
Room.runUpdateLoop();
setInterval(Room.runUpdateLoop, 1 * 60 * 1000); // 10 Minutes

// Begin listening on relevant port
const server = app.listen(C.PORT, () =>
{
    console.log('Server listening on port ' + C.PORT);
});
