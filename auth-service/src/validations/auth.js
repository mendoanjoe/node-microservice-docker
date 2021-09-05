const Joi = require('joi');

const register = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .required(),

  email: Joi.string()
    .email(),
});

const login = Joi.object({
  password: Joi.string()
    .required(),
  email: Joi.string()
    .email(),
});

module.exports = {
  register,
  login,
};
