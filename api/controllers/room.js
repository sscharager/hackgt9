const Room = require('../models/room');
require('dotenv').config();

exports.sendText = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    // Required incoming values
    const buildingName = req.body.buildingName;
    const roomNumber = req.body.roomNumber;
    const phoneNumber = 1 + req.body.phoneNumber;
    const roomID = req.body.roomID;


    const filter = {_id: roomID};

    var currentDateObj = new Date();
    var addMlSeconds = 60 * 60 * 1000;
    var newDateObj = new Date(currentDateObj + addMlSeconds);

    try {
        // Searches for user based on the roomID provided after the link
        const room = await Room.findOne({_id: roomID});
        if (room) {
            // Sets the user's email token to null and verified to true if link is pressed
            room.timeIn = currentDateObj;
            room.timeOut = newDateObj;
            room.seatsAvailable = room.seatsTotal;

            room.save(function (err) {
                if(err)
                {
                    response.ok = false;
                    response.error = err;
                    res.status(200).json(response);
                }
            });
        }
        else
        {
            // If user not found, then error return.
            response.ok = false;
            response.error = "Room not found";
            res.status(200).json(response);
        }

    } catch (err) {
        response.ok = false;
        response.error = err.message;
        res.status(200).json(response);
    }

    const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    );

    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
        body:`You have successfully reserved ` + buildingName + `-` + roomNumber + ` for the next 30 minutes!\nSend the following link to your friends to show them room information and for them to enroll.\nhttp://localhost:5000/api/room/addMember?roomID=${roomID}`
    }).then((messsage) => console.log(message.sid));


    // <p>You have successfully reserved ` + buildingName + `-` + roomNumber + ` for the next 30 minutes!</p>
        // <p>Send the following link to your friends to show them room information and for them to enroll.</p>
        // <a href = http://qrstudy.herokuapp.com/api/room/addMember?roomID=${roomID}>Link</a>
    res.status(200).json(response);
}

exports.addMember = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    try {
        // Searches for user based on the roomID provided after the link
        const room = await Room.findOne({_id: req.query.roomID});
        if (room && room.seatsAvailable > 0) {
            // Sets the user's email token to null and verified to true if link is pressed
            room.seatsAvailable -= 1;

            room.save(function (err) {
                if(err)
                {
                    response.ok = false;
                    response.error = err;
                    res.status(200).json(response);
                }
                else
                {
                    response.ok = true;
                    response.status = "Added to room";
                    response.room = room;
                    res.status(200).json(response);
                }
            });
        }
        else
        {
            // If user not found, then error return.
            response.ok = false;
            response.error = "Room not found or not enough seats";
            res.status(200).json(response);
        }

    } catch (err) {
        response.ok = false;
        response.error = err.message;
        res.status(200).json(response);
    }
}
