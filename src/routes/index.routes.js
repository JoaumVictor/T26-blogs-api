const { Router } = require('express');
const routerLogin = require('./login.routes');

const appRoutes = Router();

appRoutes.use('/login', routerLogin);

module.exports = appRoutes;
