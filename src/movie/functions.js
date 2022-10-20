const Movie = require("./movieTable.js");
const Misc = require("./miscTable.js");
const User = require("./userTable.js");

exports.createMovie = async (movieObject) => {
  try {
    await Movie.create(movieObject);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovies = async (filterObject) => {
  try {
    if (filterObject) {
      return await Movie.findOne({ where: filterObject });
    } else {
      return await Movie.findAll();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filter, updated) => {
  try {
    await Movie.update(updated, { where: filter });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (deleteObject) => {
  try {
    await Movie.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};

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

exports.createUser = async (userObject) => {
  try {
    await User.create(userObject);
  } catch (error) {
    console.log(error);
  }
};

exports.readUser = async (filterObject) => {
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

exports.deleteUser = async (deleteObject) => {
  try {
    await User.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};
