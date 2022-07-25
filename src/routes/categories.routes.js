const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const categoriesRouter = Router();

categoriesRouter.post('/',
  middlewares.tokenValidate,
  middlewares.validateName,
  controllers.createCategory);

module.exports = categoriesRouter;
