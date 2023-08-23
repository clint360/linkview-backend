const Url = require("../models/url");
const User = require("../models/user");
const sequelize = require("./dbconfig");

function relate() {
  sequelize.sync();
  User.hasMany(Url);
  sequelize.sync();
}

module.exports = relate;
