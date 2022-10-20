const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const User = sequelize.define("User", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;