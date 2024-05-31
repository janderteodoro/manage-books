const Joi = require('joi')

module.exports = {
  create: Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.string().required().min(3).max(4),
    publisher: Joi.string().required().min(3).max(25),
    synopsis: Joi.string().required().max(110),
  }),
  update: Joi.object().keys({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    year: Joi.string().optional().min(3).max(4),
    publisher: Joi.string().optional().min(3).max(25),
    synopsis: Joi.string().optional().max(110),
    })
}