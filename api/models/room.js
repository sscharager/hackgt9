const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define room schema
const RoomSchema = new Schema({
    longitude: {type:String},
    latitude: {type:String},
    buildingName: {type:String},
    roomNumber: {type:String},
    seatsTotal: {type:Number},
    seatsAvailable: {type:Number},
    timeIn: {type:Date, default:Date.now},
    timeOut: {type:Date},
    phoneNumber: {type:String},
    university: {type:String}
});

// Export model
module.exports = mongoose.model('Room', RoomSchema);
