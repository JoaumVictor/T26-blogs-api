const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/',
  middlewares.loginValidation,
  controllers.postLogin);

module.exports = loginRouter;
