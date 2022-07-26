const postLogin = require('./login.controller');
const { userPost, getAll, getById } = require('./user.controller');
const { createCategory, getAllCategories } = require('./category.controller');
const { getAllPosts, getPostById } = require('./post.controller');

module.exports = {
  postLogin,
  userPost,
  getAll,
  getById,
  createCategory,
  getAllCategories,
  getAllPosts,
  getPostById,
};