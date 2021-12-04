const User = require("../../user/model/user.model");
module.exports = (sequelize, Sequelize) => {
  let Post = sequelize.define("post", {
    title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
  });
  return Post;
};