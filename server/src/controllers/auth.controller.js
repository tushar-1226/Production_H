const User = require("../models/user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        password: hashedPassword
    });

    await newUser.save();

    res.send("User registered sucessfully")
}

const loginUser = async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user){
        return res.status(400).send("User not found")
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).send("Invalid password");
    }

    const token = jwt.sign(
        { userId: user._id },
        "mysecretkey",
        { expiresIn: "4d"}
    );
    console.log(res.data)
    console.log(token)
    res.json({
        message: "Login successful",
        token
    });
}   

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        res.json({
            message: "User profile fetched",
            user
        });
    } catch (error) {
        res.status(500).send("Server error");
    }
};

module.exports = {registerUser, loginUser, getProfile}
