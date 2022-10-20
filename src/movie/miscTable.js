const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const Misc = sequelize.define("Miscellaneous", {
  director: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  producer: {
    type: DataTypes.STRING,
    defaultValue: "Unspecified",
  },
  released: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = Misc;
