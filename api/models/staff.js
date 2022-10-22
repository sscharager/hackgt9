const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define staff schema
const StaffSchema = new Schema({
    email: {type:String},
    password: {type:String},
    firstName: {type:String},
    lastName: {type:String},
    university: {type:String}
});

// Export model
module.exports = mongoose.model('Staff', StaffSchema);
