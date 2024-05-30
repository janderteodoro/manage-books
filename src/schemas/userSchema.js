const Joi = require('joi')

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

module.exports = {
  create: Joi.object().keys({
    userName: Joi.string().required().min(3).max(15),
    userSurname: Joi.string().required().min(3).max(20),
    email: Joi.string().required().regex(emailRegex),
    password: Joi.string().required().min(8)
  }),
  update: Joi.object().keys({
    userName: Joi.string().optional().min(3).max(15),
    userSurname: Joi.string().optional().min(3).max(20),
    email: Joi.string().optional().regex(emailRegex),
    password: Joi.string().optional().min(8).max(20),
    authorization: Joi.string().required()
  }),
  login: Joi.object().keys({
    email: Joi.string().required().regex(emailRegex),
    password: Joi.string().required().min(8).max(20),
  })
}