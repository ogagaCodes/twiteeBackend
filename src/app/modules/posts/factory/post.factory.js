const db = require("../../../../_config/db.config");
const Posts = db.posts;
const Op = db.Sequelize.Op;

class Post {
  constructor(title, content, userId) {
    (this.title = title), (this.content = content), (this.userId = userId);
  }

  createPost() {
    return Posts.create({
      tile: this.title,
      content: this.content,
    });
  }
  deletePost() {
    Posts.destroy({
      where: { title: this.title },
    });
  }
}

module.exports = Post;
