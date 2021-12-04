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
        this.setDataValue("password", hash(value));
      },
    },
  });

  return User;
};