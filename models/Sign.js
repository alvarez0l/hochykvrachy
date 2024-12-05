const { request } = require("express");
const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const SignSchema = new mongoose.Schema(
    {
        signes: {
            signType: {
                type: String,
                required: true
            },
            doc: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            time: {
                type: String,
                required: true
            },
            user: {
                type: String
            }
        }
    },
    {
        timestamps: true,
});

module.exports = mongoose.model('Sign', SignSchema);
//export default mongoose.model('User', UserSchema);