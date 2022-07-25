const httpStatusCode = require('../helpers/httpStatusCode');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  // se não tiver email ou senha, retorno um bad request com a mensagem de campos inválidos
  if (!email || !password) {
    return res
    .status(httpStatusCode.BAD_REQUEST)
    .json({ message: 'Some required fields are missing' });
  }

  // caso contrário, executo o next
  next();
};

module.exports = loginValidation;