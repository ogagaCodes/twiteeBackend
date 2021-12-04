const { Sequelize } = require("sequelize");
const KEYS = require("../_helpers/keys");

const sequelize = new Sequelize(KEYS.db, KEYS.dbUser, KEYS.dbPassword, {
  host: KEYS.dbHost,
  dialect: "mysql",
  port: KEYS.dbPort,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../app/modules/user/model/user.model")(sequelize, Sequelize);
db.posts = require("../app/modules/posts/model/post.model")(sequelize, Sequelize);
db.comments = require("../app/modules/comments/model/comment.model")(sequelize, Sequelize);

// defind relations
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);
db.users.hasMany(db.comments);
db.posts.hasMany(db.comments);

module.exports = db;
