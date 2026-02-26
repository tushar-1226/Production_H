const User = require("../models/user.model")
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    
    const {userName, email, password} = req.body

    const existingUser = await User.findOne({email})

    if (existingUser){
        return res.status(400).send("User already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
        userName,
        email,
        password
    });

    await newUser.save();

    res.send("User registered sucessfully")
}


module.exports = {registerUser}