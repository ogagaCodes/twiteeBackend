const { hashPassword } = require('../../../../_helpers/hashpassword')
module.exports = (sequelize, Sequelize) => {
  let User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      set(value) {
        this.setDataValue("password", hashPassword(value));
      },
    },
  });

  return User;
};