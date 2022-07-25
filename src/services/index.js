const postLogin = require('./login.service');
const { userPost, getAll } = require('./user.service');

module.exports = {
  postLogin,
  userPost,
  getAll,
};
