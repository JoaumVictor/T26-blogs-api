const httpStatusCodes = require('../helpers/httpStatusCode');
const services = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await services.createCategory(name);
    return res.status(httpStatusCodes.CREATED).json(newCategory);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatusCodes.INTERNAL_SERVER)
      .json({ message: 'Erro interno ao criar categoria' });
  }
};

module.exports = { createCategory };