const httpStatusCodes = require('../helpers/httpStatusCode');

const validateName = (req, res, next) => {
  const { name } = req.body;

  // verifica se existe um name na requisição
  if (!name) return res.status(httpStatusCodes.BAD_REQUEST).json({ message: '"name" is required' });

  return next();
};

module.exports = validateName;