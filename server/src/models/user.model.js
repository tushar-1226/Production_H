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
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        cart: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Drink",
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    {
        timestamps: true
    }
);
const userModel = mongoose.model("User", userSchema)

module.exports = userModel;