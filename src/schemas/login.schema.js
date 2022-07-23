const joi = require('joi');

const joiLoginAuthentication = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'Some required fields are missing' }),
  password: joi.string()
    .required()
    .messages({ 'any.required': 'Some required fields are missing' }),
});

module.exports = joiLoginAuthentication;
