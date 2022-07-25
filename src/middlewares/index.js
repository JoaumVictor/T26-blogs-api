const loginValidation = require('./login.middlewares');
const userValidation = require('./user.middlewares');
const tokenValidate = require('./tokenValidate.middlewares');

module.exports = {
  loginValidation,
  userValidation,
  tokenValidate,
};
