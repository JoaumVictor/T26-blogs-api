const loginValidation = require('./login.middlewares');
const userValidation = require('./user.middlewares');
const tokenValidate = require('./tokenValidate.middlewares');
const validateName = require('./category.middleware');

module.exports = {
  loginValidation,
  userValidation,
  tokenValidate,
  validateName,
};
