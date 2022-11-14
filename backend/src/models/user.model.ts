import mongoose from "mongoose";
import { CONSTANT } from "../utils";

import mongooseDelete from "mongoose-delete";

const User = new mongoose.Schema({
    nickname: {
        type: String,
    },
    fullName: {
        type: String,
    },
    linkedin : {
        type:String,
        trim: true
    },
    github : {
        type:String,
        trim: true
    },
    instagram : {
        type:String,
        trim: true
    },
    date: Date,
    role: {
        type: String,
        enum: CONSTANT.USER_ROLES
    },
    gender: {
        type: String,
        enum: CONSTANT.GENDER
    },
    email: {
        type: String,
        trim: true,
    },
},
    { timestamps: true }
);

User.plugin(mongooseDelete, { overrideMethods: true });

export default mongoose.model("users", User);