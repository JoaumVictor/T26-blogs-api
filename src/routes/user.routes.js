const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const userRouter = Router();

userRouter.post('/',
  middlewares.userValidation,
  controllers.userPost);

userRouter.get('/',
  middlewares.tokenValidate,
  controllers.getAll);

module.exports = userRouter;
