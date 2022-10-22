const Staff = require('../models/staff');

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
