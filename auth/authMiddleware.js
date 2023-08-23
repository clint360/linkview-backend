const User = require("../models/user");
const { verifyToken } = require("../utils/jwt");

const authMiddleWare = async (req, res, next) => {
  const authorisation = req.get("Authorization");
  const authToken = authorisation?.split(" ").pop();
  if (!authToken) {
    res.status(401).send("Unauthorized User");
  }

  try {
    const { id } = verifyToken(authToken);
    const user = await User.findOne({ where: { id: id } });
    if (!user) res.status(401).send("Unauthorised User");
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

module.exports = authMiddleWare;
