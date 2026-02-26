const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;