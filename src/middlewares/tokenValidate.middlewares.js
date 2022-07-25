const httpStatusCode = require('../helpers/httpStatusCode');
const { validateToken } = require('../helpers/token');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;

  // se não tiver authorization retorna um token not found
  if (!authorization) {
    return res
    .status(httpStatusCode.UNAUTHORIZED)
    .json({ message: 'Token not found' });
  }

  // faz a validação do token
  try {
    validateToken(authorization); 
  } catch (error) {
    return res
    .status(httpStatusCode.UNAUTHORIZED)
    .json({ message: 'Expired or invalid token' });
  }

  // executo o next
  return next();
};

module.exports = tokenValidate;