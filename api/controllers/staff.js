const Staff = require('../models/staff');
const Room = require('../models/room');

exports.register = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    // Required incoming values
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const university = req.body.university;

    if (email == null)
    {
        response.ok = false;
        response.error = 'email null';
        return res.status(200).json(response);
    }
    if (password == null)
    {
        response.ok = false;
        response.error = 'password null';
        return res.status(200).json(response);
    }
    if (firstName == null)
    {
        response.ok = false;
        response.error = 'first name null';
        return res.status(200).json(response);
    }
    if (lastName == null)
    {
        response.ok = false;
        response.error = 'last name null';
        return res.status(200).json(response);
    }
    if (university == null)
    {
        response.ok = false;
        response.error = 'university null';
        return res.status(200).json(response);
    }

    // Create a new instance of User model
    var newStaff = new Staff({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        university: university
    });

    // Save the new instance
    newStaff.save(function (err) {
        // If an error occurs, return ok:false and the error message
        if(err)
        {
            response.ok = false;
            return res.status(200).json(response);
        }
        // Otherwise return a success message
        else
        {
            res.status(200).json(response);
        }
    });
}


exports.login = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    // Required incoming values
    const email = req.body.email;
    const password = req.body.password;

    if (email == null)
    {
        response.ok = false;
        response.error = 'email null';
        return res.status(200).json(response);
    }
    if (password == null)
    {
        response.ok = false;
        response.error = 'password null';
        return res.status(200).json(response);
    }

    // Attempt to find a user with matching username/password
    const filter = {email: email, password: password};
    const staff = await Staff.findOne(filter);

    if(staff)
    {
        response.staff = staff.toJSON();
        res.status(200).json(response);
    }
    else
    {
        response.ok = false;
        response.error = 'Invalid email or password';
        res.status(200).json(response);
    }

}

exports.createRoom = async function(req, res, next) {
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

exports.getRooms = async function(req, res, next) {
    // Default response object
    var response = {ok:true};

    // Incoming values
    const university = req.body.university;

    // Attempt to find a user with matching username/password
    const filter = {university: university};
    // const projection = {_id: 1, username: 1, profileImageUrl: 1, followers: 1};
    const rooms = await Room.find(filter);

    response.rooms = rooms;
    res.status(200).json(response);
}
