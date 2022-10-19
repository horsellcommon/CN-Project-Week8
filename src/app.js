const yargs = require("yargs");
const { sequelize } = require("./db/connection.js");

const app = async (yargsObject) => {
  try {
    await sequelize.sync();
    if (yargsObject.create) {
    } else if (yargsObject.read) {
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
