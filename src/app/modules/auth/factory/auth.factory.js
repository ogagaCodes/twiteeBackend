const db = require("../../../../_config/db.config");
const User = db.users;
const Op = db.Sequelize.Op;

class Auth {
  constructor(email, userId) {
    (this.email = email), (this.userId = userId);
  }

  loginUser() {
    
  }

  authenticateUser() {}
}

module.exports = Auth;