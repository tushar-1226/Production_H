const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send("No token provided");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "mysecretkey");

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).send("Invalid token");
    }
};

module.exports = protect;