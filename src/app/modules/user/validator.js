const Joi = require("joi").extend(require("@joi/date"));
Joi.objectId = require("joi-objectid")(Joi);

exports.registerUserSchema = Joi.object().keys({
 name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().trim().required(),
});