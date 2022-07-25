const httpStatusCode = require('../helpers/httpStatusCode');
const joiUserAuthentication = require('../schemas/user.schema');

const userValidation = (req, res, next) => {
  const myPost = req.body;

  // faço a validação da minha postagem usando joi
  const { error } = joiUserAuthentication.validate(myPost);

  // se meu error for true, eu retorno um bad request com a mensagem do erro
  if (error) {
    return res.status(httpStatusCode.BAD_REQUEST).json({ message: error.message });
  }
  
  // se meu erro for falso, a validação deu certo, e eu executo o next
  return next();
};

module.exports = userValidation;

// npm run drop
// npm run prestart
// npm run seed
