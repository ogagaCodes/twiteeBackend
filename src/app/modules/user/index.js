const { Router } = require("express");
const validateRequest = require("../../../middlewares/validateRequest");
// const userSchema = require("./user.schema");
// const userController = require("./user.controller");
const { checkAuth } = require("../../../middlewares/checkAuth");

const router = Router();
router.get(
    "/test",
  //   validateRequest(userSchema.registerUserSchema, "body"),
    async (req, res, next) => {
        return res.send("Hello Tweeetiiiiii......lol")
    }
  );
router.post(
  "/signup",
//   validateRequest(userSchema.registerUserSchema, "body"),
//   userController.signup
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
