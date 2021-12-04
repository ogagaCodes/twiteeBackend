const db = require("../../../../_config/db.config");
const Comments = db.comments;
const Op = db.Sequelize.Op;

class Comment {
  constructor(content, userId, postId) {
    (this.content = content), (this.userId = userId), (this.postId = postId);
  }

  createComment() {
    return Comments.create({
      content: this.content,
      userId: this.userId,
      postId: this.postId,
    });
  }
}

module.exports = Comment;
