const { request } = require("express");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    l_name: {
        type: String,
        required: true,
    },
    s_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    // avatarUrl: String,
    }, 
    {
    timestamps: true,
    },
);

module.exports = mongoose.model('User', UserSchema);
//export default mongoose.model('User', UserSchema);