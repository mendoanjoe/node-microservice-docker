const Joi = require('joi');

const create = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .required(),

  email: Joi.string()
    .email(),
});

const readById = Joi.object({
  id: Joi.string()
    .required(),
});

const updateById = Joi.object({
  body: Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(30),

    password: Joi.string(),

    email: Joi.string()
      .email(),
  })
    .required(),

  params: Joi.object().keys({
    id: Joi.string()
      .required(),
  })
    .required(),
});

const deleteById = Joi.object({
  id: Joi.string()
    .required(),
});

const pagination = Joi.object({
  page: Joi.number()
    .default(1),

  each_page: Joi.number()
    .default(5),
});

module.exports = {
  create,
  readById,
  updateById,
  deleteById,
  pagination,
};
