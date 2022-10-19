const Movie = require("./movieTable.js");

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
    }
  } catch (error) {
    console.log(error);
  }
};
