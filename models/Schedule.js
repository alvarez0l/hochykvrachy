const { request } = require("express");
const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    fio: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    }
    }, 
    {
    timestamps: true,
    },
);

module.exports = mongoose.model('Schedule', ScheduleSchema);
//export default mongoose.model('User', UserSchema);