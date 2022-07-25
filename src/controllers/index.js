const postLogin = require('./login.controller');
const { userPost, getAll, getById } = require('./user.controller');
const { createCategory } = require('./category.controller');

module.exports = {
  postLogin,
  userPost,
  getAll,
  getById,
  createCategory,
};