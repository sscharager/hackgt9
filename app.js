// Perform imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


// Set constants
const C = require('./constants.js');

// Create and configure express app
const app = express();

app.set('port', C.PORT);
app.use(cors());
app.use(bodyParser.json());

// Customizer headers
app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

// Configure API routes
const staffRouter = require('./api/routes/staff');
app.use('/api/staff', staffRouter);
const userRouter = require('./api/routes/room');
app.use('/api/room', userRouter);


app.get('*', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'));
});

module.exports = app;