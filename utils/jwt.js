const jwt = require("jsonwebtoken");
const { JWT_SECRETE_KEY } = require("./constants");

const signToken = (token) => {
  return jwt.sign(token, JWT_SECRETE_KEY, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRETE_KEY);
};

module.exports = {
  signToken,
  verifyToken,
};
