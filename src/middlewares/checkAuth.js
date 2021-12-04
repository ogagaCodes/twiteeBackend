const { HTTP } = require("../_constants/http");
const { RESPONSE } = require("../_constants/response");
const createError = require("../_helpers/createError");
const { jwtVerify } = require("../_helpers/token");
const User = require("../app/modules/user/model/user.model");


exports.checkAuth = async (req, _, next) => {
  const message = "Unauthorized";
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    return next(
      createError(HTTP.UNAUTHORIZED, [
        {
          status: RESPONSE.ERROR,
          message,
          statusCode: HTTP.UNAUTHORIZED,
        },
      ])
    );
  }
  try {
    const { id } = jwtVerify(token) || {};

    const user = await User.findById(id);

    if (!user) {
      return next(
        createError(HTTP.UNAUTHORIZED, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode: HTTP.UNAUTHORIZED,
          },
        ])
      );
    }

    if (user.blocked) {
      return next(
        createError(HTTP.UNAUTHORIZED, [
          {
            status: RESPONSE.ERROR,
            message: "Your account is blocked. Please contact support.",
            statusCode: HTTP.UNAUTHORIZED,
          },
        ])
      );
    }

    if (user) {
      req.userId = id;
      req.user = user;
      req.token = token;
      return next();
    }

    return next(
      createError(HTTP.UNAUTHORIZED, [
        {
          status: RESPONSE.ERROR,
          message,
          statusCode: HTTP.UNAUTHORIZED,
        },
      ])
    );
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};
