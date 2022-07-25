const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const categoriesRouter = Router();

categoriesRouter.post('/',
  middlewares.validateName,
  controllers.createCategory);

categoriesRouter.get('/',
middlewares.tokenValidate,
controllers.getAllCategories);

module.exports = categoriesRouter;
