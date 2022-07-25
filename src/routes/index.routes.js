const { Router } = require('express');
const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');

const appRoutes = Router();

appRoutes.use('/login', loginRouter);
appRoutes.use('/user', userRouter);

module.exports = appRoutes;
