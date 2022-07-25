const { Router } = require('express');
const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.routes');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);
appRoutes.use('/categories', categoriesRouter);

module.exports = appRoutes;
