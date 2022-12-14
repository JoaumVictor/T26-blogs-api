const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (login) => {
  const token = jwt.sign({ data: login }, process.env.JWT_SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
  
  return token;
};

const validateToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateToken, validateToken };