const yargs = require("yargs");
const { sequelize } = require("./db/connection.js");
const {
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movieFunctions.js");

const app = async (yargsObject) => {
  try {
    await sequelize.sync();
    console.log("! Connection !");
    if (yargsObject.create) {
      await createMovie({ title: yargsObject.title, actor: yargsObject.actor });
      console.log("Movie added to database.");
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
        console.log(output);
      }
    } else if (yargsObject.read) {
      let output = {};
      let table = await readMovies({
        [yargsObject.key]: yargsObject.value,
      });
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
        console.log(output);
      }
    } else if (yargsObject.readAll) {
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
        console.log(output);
      }
    } else if (yargsObject.update) {
      await updateMovie(
        { [yargsObject.key]: yargsObject.value },
        { [yargsObject.updateKey]: yargsObject.updateValue }
      );
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
        console.log(output);
      }
    } else if (yargsObject.delete) {
      await deleteMovie({ title: yargsObject.title });
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
        console.log(output);
      }
    } else {
      console.log("Incorrect command.");
    }
    await sequelize.close();
  } catch (error) {
    console.log(error);
    await sequelize.close();
  }
};

app(yargs.argv);
