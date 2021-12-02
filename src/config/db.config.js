const { Sequelize } = require("sequelize");
const KEYS = require('../_helpers/keys');

(exports.init_conection = async () => {
  try {
    const sequelize = new Sequelize(KEYS.db, KEYS.dbUser, KEYS.dbPassword, {
      host: KEYS.dbHost,
      dialect: "mysql",
      port: KEYS.dbPort,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000
      }
    });
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    return sequelize;
  } catch (error) {
    console.log(error);
  }
})();
