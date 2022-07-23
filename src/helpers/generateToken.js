const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (login) => {
  const token = jwt.sign({ data: login }, process.env.JWT_SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
  
  return token;
};

module.exports = generateToken;