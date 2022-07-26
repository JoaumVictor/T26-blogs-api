const { Router } = require('express');
const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.routes');
const postRouter = require('./post.routes');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);
appRoutes.use('/categories', categoriesRouter);
appRoutes.use('/post', postRouter);

module.exports = appRoutes;
