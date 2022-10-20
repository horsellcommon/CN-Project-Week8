const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const User = sequelize.define("user", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;