const yargs = require("yargs");
const { sequelize } = require("./db/connection.js");
const {
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movieFunctions.js");
const {
  createMiscInfo,
  readMisc,
  updateMisc,
  deleteMisc,
} = require("./movie/miscFunctions.js");

const app = async (yargsObject) => {
  try {
    await sequelize.sync();
    console.log("! Connection !");
    if (yargsObject.create) {
      await createMovie({
        title: yargsObject.title,
        actor: yargsObject.actor,
      });
      await createMiscInfo({
        director: yargsObject.director,
        producer: yargsObject.producer,
        released: yargsObject.released,
      });
      console.log("Movie added to database.");
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
      }
      let table2 = await readMisc();
      for (let misc of table2) {
        output.director = misc.director;
        output.producer = misc.producer;
        output.released = misc.released;
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
      }
      let table2 = await readMisc();
      for (let misc of table2) {
        output.director = misc.director;
        output.producer = misc.producer;
        output.released = misc.released;
        console.log(output);
      }
    } else if (yargsObject.readAll) {
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
      }
      let table2 = await readMisc();
      for (let misc of table2) {
        output.director = misc.director;
        output.producer = misc.producer;
        output.released = misc.released;
        console.log(output);
      }
    } else if (yargsObject.update) {
      await updateMovie(
        { [yargsObject.key]: yargsObject.value },
        { [yargsObject.updateKey]: yargsObject.updateValue }
      );
      await updateMisc(
        { [yargsObject.key]: yargsObject.value },
        { [yargsObject.updateKey]: yargsObject.updateValue }
      );
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
      }
      let table2 = await readMisc();
      for (let misc of table2) {
        output.director = misc.director;
        output.producer = misc.producer;
        output.released = misc.released;
        console.log(output);
      }
    } else if (yargsObject.delete) {
      await deleteMovie({ title: yargsObject.title });
      await deleteMisc({ director: yargsObject.director });
      let output = {};
      let table = await readMovies();
      for (let movie of table) {
        output.id = movie.id;
        output.title = movie.title;
        output.actor = movie.actor;
      }
      let table2 = await readMisc();
      for (let misc of table2) {
        output.director = misc.director;
        output.producer = misc.producer;
        output.released = misc.released;
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
