const { User } = require('../database/models');
const CustomError = require('../helpers/customError');
const { generateToken } = require('../helpers/token');
const httpStatusCodes = require('../helpers/httpStatusCode');

const userPost = async (objPost) => {
  console.log(objPost);
  const { email } = objPost;

  // pego todos os emails no response
  const response = await User.findOne({ where: { email } });

  // valido se o email já existe, e se for true, eu retorno um erro de conflito
  if (response) throw new CustomError(httpStatusCodes.CONFLICT, 'User already registered');

  // crio um novo usuário
  User.create(objPost);

  // gero um token e retorno
  const token = generateToken(email);
  return token;
};

const getAll = async () => {
  // pega todos os usuários e retorna
  const response = await User.findAll({ attributes: { exclude: ['password'] } });
  return response;
};

module.exports = { userPost, getAll };