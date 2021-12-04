module.exports = (sequelize, Sequelize) => {
  let Comment = sequelize.define("comment", {
      content: {
        type: Sequelize.STRING
      },
  });
  return Comment;
};