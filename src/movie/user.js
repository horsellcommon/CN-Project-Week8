const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const User = sequelize.define("user", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const createUser = async (userObject) => {
  try {
    await User.create(userObject);
  } catch (error) {
    console.log(error);
  }
};

const readUser = async (filterObject) => {
  try {
    if (filterObject) {
      return await User.findOne({ where: filterObject });
    } else {
      return await User.findAll();
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (deleteObject) => {
  try {
    await User.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { User, createUser, readUser, deleteUser };
