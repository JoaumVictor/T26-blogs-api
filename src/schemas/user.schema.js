const joi = require('joi');

const joiUserAuthentication = joi.object({
  displayName: joi.string()
  .required()
  .min(8)
  .messages({
    'min.string': '"displayName" length must be at least 8 characters long',
  }),
  email: joi.string()
    .required()
    .email()
    .messages({
      'email.string': '"email" must be a valid email',
    }),
  password: joi.string()
    .required()
    .min(6)
    .messages({
      'min.string': '"password" length must be at least 6 characters long',
    }),
    image: joi.string().required(),
});

module.exports = joiUserAuthentication;