const { BlogPost, User, Category } = require('../database/models');
const CustomError = require('../helpers/customError');
const httpStatusCodes = require('../helpers/httpStatusCode');

const getPostOptions = {
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }, {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
    }],
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll(getPostOptions);
  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id }, ...getPostOptions });

  if (!post) throw new CustomError(httpStatusCodes.NOT_FOUND, 'Post does not exist');

  return post;
};

module.exports = { getAllPosts, getPostById };