const Room = require('../models/room');

exports.scanQR = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    // Incoming values
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const buildingName = req.body.buildingName;
    const roomNumber = req.body.roomNumber;
    const seatsTotal = req.body.seatsTotal;
    const university = req.body.university;

    // Create a new instance of post model
    var newRoom = new Room({
        longitude: longitude,
        latitude: latitude,
        buildingName: buildingName,
        roomNumber: roomNumber,
        seatsTotal: seatsTotal,
        university: university
    });

    // Save the new instance
    newRoom.save(function (err) {
        // If an error occurs, return ok:false and the error message
        if(err)
        {
            response.ok = false;
            response.error = err;
            res.status(200).json(response);
        }
        // Otherwise return a success message
        else
        {
            response.roomID = newRoom._id;
            res.status(200).json(response);
        }
    });
}
