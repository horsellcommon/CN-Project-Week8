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

const createMiscInfo = async (miscObject) => {
  try {
    await Misc.create(miscObject);
  } catch (error) {
    console.log(error);
  }
};

const readMisc = async (filterObject) => {
  try {
    if (filterObject) {
      return await Misc.findOne({ where: filterObject });
    } else {
      return await Misc.findAll();
    }
  } catch (error) {
    console.log(error);
  }
};

const updateMisc = async (filter, updated) => {
  try {
    await Misc.update(updated, { where: filter });
  } catch (error) {
    console.log(error);
  }
};

const deleteMisc = async (deleteObject) => {
  try {
    await Misc.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Misc, createMiscInfo, readMisc, updateMisc, deleteMisc };
