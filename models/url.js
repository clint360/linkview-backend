const { DataTypes } = require("sequelize");
const sequelize = require("../database/dbconfig");

const Url = sequelize.define(
  "url",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    image: DataTypes.STRING,
    previewImgSrc: {
      type: DataTypes.STRING,
    },
    number_of_calls: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    shorten: {
      type: DataTypes.INTEGER,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Url;
