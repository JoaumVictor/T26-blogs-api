const { Category } = require('../database/models');
// const httpStatusCode = require('../helpers/httpStatusCode');
// const CustomError = require('../helpers/customError');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };
