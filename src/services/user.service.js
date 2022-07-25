const { User } = require('../database/models');
const CustomError = require('../helpers/customError');
const { generateToken } = require('../helpers/token');
const httpStatusCodes = require('../helpers/httpStatusCode');

const userPost = async (objPost) => {
  const { email } = objPost;

  // pego todos os emails no response
  const response = await User.findOne({ where: { email } });

  // valido se o email já existe, e se for true, eu retorno um erro de conflito
  if (response) throw new CustomError(httpStatusCodes.CONFLICT, 'User already registered');

  // crio um novo usuário, gero um token e retorno
  User.create(objPost);
  const token = generateToken(email);
  return token;
};

const getAll = async () => {
  // pega todos os usuários
  const data = await User.findAll({ attributes: { exclude: ['password'] } });
  return data;
};

const getById = async (id) => {
  // pega um usuario pelo id
  const data = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  // se ele não encontrar um resultado pelo id, retorna um erro
  if (!data) throw new CustomError(httpStatusCodes.NOT_FOUND, 'User does not exist');
  return data;
};

module.exports = { userPost, getAll, getById };
