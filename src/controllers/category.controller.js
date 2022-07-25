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

const getAllCategories = async (_req, res) => {
  try {
    const categories = await services.getAllCategories();
    return res.status(httpStatusCodes.OK).json(categories);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatusCodes.INTERNAL_SERVER)
      .json({ message: 'Erro interno' });
  }
};

module.exports = { createCategory, getAllCategories };