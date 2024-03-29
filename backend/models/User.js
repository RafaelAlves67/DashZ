import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = mongoose.model('User', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
    }
}))

export default User