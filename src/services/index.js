const postLogin = require('./login.service');
const { userPost, getAll, getById } = require('./user.service');
const { createCategory } = require('./category.service');

module.exports = {
  postLogin,
  userPost,
  getAll,
  getById,
  createCategory,
};
