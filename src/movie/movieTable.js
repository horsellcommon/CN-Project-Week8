const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Unspecified",
  },
});

module.exports = Movie;
