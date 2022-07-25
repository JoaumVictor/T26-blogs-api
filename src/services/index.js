const postLogin = require('./login.service');
const { userPost, getAll, getById } = require('./user.service');

module.exports = {
  postLogin,
  userPost,
  getAll,
  getById,
};
