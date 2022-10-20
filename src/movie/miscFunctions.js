const Misc = require("./miscTable.js");

exports.createMiscInfo = async (miscObject) => {
  try {
    await Misc.create(miscObject);
  } catch (error) {
    console.log(error);
  }
};

exports.readMisc = async (filterObject) => {
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

exports.updateMisc = async (filter, updated) => {
  try {
    await Misc.update(updated, { where: filter });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMisc = async (deleteObject) => {
  try {
    await Misc.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};
