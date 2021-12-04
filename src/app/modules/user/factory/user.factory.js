const db = require("../../../../_config/db.config");
const Users = db.users;
const Op = db.Sequelize.Op;

class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }

  createUser() {
    return Users.create({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }
}

module.exports = User;