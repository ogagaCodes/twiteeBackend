module.exports = (sequelize, Sequelize) => {
    let User = sequelize.define("user", {
      name: {
        token: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,

      },
    });
  
    return User;
  };