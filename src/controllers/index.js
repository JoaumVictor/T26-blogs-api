const postLogin = require('./login.controller');
const { userPost, getAll } = require('./user.controller');

module.exports = {
  postLogin,
  userPost,
  getAll,
};