const httpStatusCode = require('../helpers/httpStatusCode');
const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');
const CustomError = require('../helpers/customError');

const postLogin = async (email, password) => {
  const response = await User.findOne({ where: { email } });
  if (!response) throw new CustomError(httpStatusCode.BAD_REQUEST, 'Invalid fields'); 
  if (!response.password === password) {
    throw new CustomError(httpStatusCode.BAD_REQUEST, 'Invalid fields');
  }
  const token = generateToken(email);
  return token;
};

module.exports = postLogin;