const httpStatusCodes = require('../helpers/httpStatusCode');
const services = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await services.getAllPosts();
    return res
    .status(httpStatusCodes.OK)
    .json(allPosts);
  } catch (error) {
    console.error(error);
    return res
    .status(httpStatusCodes.INTERNAL_SERVER)
    .json({ message: 'Internal Server Error' });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await services.getPostById(id);
    return res
    .status(httpStatusCodes.OK)
    .json(post);
  } catch (error) {
    console.error(error);
    return res
    .status(error.status)
    .json({ message: error.message });
  }
};

module.exports = { getAllPosts, getPostById };