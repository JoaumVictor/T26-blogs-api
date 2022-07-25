const postLogin = require('./login.controller');
const { userPost, getAll, getById } = require('./user.controller');

module.exports = {
  postLogin,
  userPost,
  getAll,
  getById,
};