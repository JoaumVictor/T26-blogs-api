const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const postRouter = Router();

// postRouter.post('/',
//   middlewares.loginValidation,
//   controllers.postLogin);

postRouter.get('/',
  middlewares.tokenValidate,
  controllers.getAllPosts);

postRouter.get('/:id',
  middlewares.tokenValidate,
  controllers.getPostById);

module.exports = postRouter;
