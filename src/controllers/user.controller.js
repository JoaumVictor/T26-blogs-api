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

module.exports = userPost;
