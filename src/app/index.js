const { Router } = require("express");
const users = require("./modules/user");
// const posts = require("./user/user.route");


module.exports = () => {
    const router = Router();
  
    router.use("/users", users);
    // router.use("/posts", posts);
  
    return router;
  };
  