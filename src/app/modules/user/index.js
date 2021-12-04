const { Router } = require("express");
const validateRequest = require("../../../middlewares/validateRequest");
const userSchema = require("./validator");
const userController = require("./controllers/user.controllers");
const { checkAuth } = require("../../../middlewares/checkAuth");

const router = Router();
router.post(
  "/signup",
  validateRequest(userSchema.registerUserSchema, "body"),
  userController.signupUser
);

router.post(
  "/logon",
//   validateRequest(userSchema.logonUserSchema, "body"),
//   userController.logonUserController
);

router.post(
  "/post-tweet",
//   checkAut,
//   validateRequest(userSchema.postTweet, "body"),
//   userController.postTweet
);

router.post(
  "/post-comment",
//   checkAuth,
//   validateRequest(userSchema.postComment, "body"),
//   userController.postComment
);

module.exports = router;
