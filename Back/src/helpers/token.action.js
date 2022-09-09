const jwt = require("jsonwebtoken");

const createToken = (id, name) => {
    return jwt.sign( { id, name }, process.env.JWT_SECRET, { expiresIn: "1d" });

};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createToken, verifyToken };