const httpStatusCode = require('../helpers/httpStatusCode');
const services = require('../services');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await services.loginUser(email, password);
    console.log(token);
    return res.status(httpStatusCode.OK).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
