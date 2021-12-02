const express = require("express");
const app = express();
require('dotenv').config();
require('./config/db.config');
class Init_App {
  constructor(app) {
    this.app = app;
  }

  start() {
    return app.listen(process.env.PORT, () =>
      console.log(`Server started.... on port ${process.env.PORT}`)
    );
  }
}

module.exports = Init_App;
