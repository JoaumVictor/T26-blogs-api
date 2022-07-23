// const joiValidation = require('../schemas/login.schema');
const httpStatusCode = require('../helpers/httpStatusCode');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
    .status(httpStatusCode.BAD_REQUEST)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = loginValidation;