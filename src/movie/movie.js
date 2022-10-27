const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection.js");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Unspecified",
  },
});

const createMovie = async (movieObject) => {
  try {
    await Movie.create(movieObject);
  } catch (error) {
    console.log(error);
  }
};

const readMovies = async (filterObject) => {
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

const updateMovie = async (filter, updated) => {
  try {
    await Movie.update(updated, { where: filter });
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (deleteObject) => {
  try {
    await Movie.destroy({ where: deleteObject });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Movie, createMovie, readMovies, updateMovie, deleteMovie };
