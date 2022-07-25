const httpStatusCode = require('../helpers/httpStatusCode');
const services = require('../services');

const userPost = async (req, res) => {
  try {
    const token = await services.userPost(req.body);
    return res.status(httpStatusCode.CREATED).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const response = await services.getAll();
    return res.status(httpStatusCode.OK).json(response);
  } catch (error) {
    console.log(error);
    return res.status(httpStatusCode.INTERNAL_SERVER).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await services.getById(id);
    return res.status(httpStatusCode.OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { userPost, getAll, getById };
