const httpStatusCode = require('../helpers/httpStatusCode');
const services = require('../services');

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await services.postLogin(email, password);
    return res.status(httpStatusCode.OK).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = postLogin;
