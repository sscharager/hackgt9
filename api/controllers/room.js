const Room = require('../models/room');

exports.newPost = async function(req, res, next) {
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
    var newPost = new Post({
        playlistID: playlistID,
        caption: caption,
        author: userID
    });

    // Save the new instance
    newPost.save(function (err) {
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
            response.postID = newPost._id;
            res.status(200).json(response);
        }
    });
}