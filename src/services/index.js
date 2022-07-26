const postLogin = require('./login.service');
const { userPost, getAll, getById } = require('./user.service');
const { createCategory, getAllCategories } = require('./category.service');
const { getAllPosts, getPostById } = require('./post.services');

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
