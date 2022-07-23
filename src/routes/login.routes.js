const { Router } = require('express');
const loginValidation = require('../middlewares/login.middlewares');
const controllers = require('../controllers');

const routerLogin = Router();

routerLogin.post('/', loginValidation, (req, res) => controllers.loginUser(req, res));

module.exports = routerLogin;
