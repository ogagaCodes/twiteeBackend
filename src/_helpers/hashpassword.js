const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    const saltRounds = await bcrypt.genSalt(23);
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.log(error);
  }
};
