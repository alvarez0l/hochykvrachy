const { request } = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const UsersInfoSchema = new mongoose.Schema(
    {
        medcard: {
            user: {
                name: String,
                userId: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    //required: true
                }
            },
            case: {
                case_id: {
                    type: ObjectId,
                    //required: true
                },
                med_id: {
                    type: ObjectId,
                    //required: true
                },
                title: {
                    type: String,
                    //required: true
                },
                inspection: {
                    type: String,
                    //required: true
                },
                date: {
                    type: String,
                    //required: true
                },
                diagnostic: {
                    type: String,
                    //required: true
                }
            }
        }
        // user: {
        //     name: String,
        //     userId: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //         required: true
        //     }
        // },
    },
    {
        timestamps: true,
});

module.exports = mongoose.model('UsersInfo', UsersInfoSchema);
//export default mongoose.model('User', UserSchema);