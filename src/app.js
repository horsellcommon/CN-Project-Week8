const yargs = require("yargs");
const { sequelize } = require("./db/connection.js");
const { createMovie, readMovies } = require("./movie/movieFunctions.js");

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
      let table = await readMovies({ [yargsObject.key]: yargsObject.value });
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
    } else if (yargsObject.delete) {
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
