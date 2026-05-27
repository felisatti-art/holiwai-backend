// src/validators/authValidator.js

const Joi = require('joi');

// Schema registrazione: email + password (min 6 caratteri)
const registerSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'L’email deve essere una stringa.',
      'string.email': 'Inserisci un’email valida.',
      'any.required': 'L’email è obbligatoria.'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': 'La password deve essere una stringa.',
      'string.min': 'La password deve avere almeno 6 caratteri.',
      'any.required': 'La password è obbligatoria.'
    })
});

// Schema login: email + password
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'L’email deve essere una stringa.',
      'string.email': 'Inserisci un’email valida.',
      'any.required': 'L’email è obbligatoria.'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': 'La password deve essere una stringa.',
      'string.min': 'La password deve avere almeno 6 caratteri.',
      'any.required': 'La password è obbligatoria.'
    })
});

module.exports = {
  registerSchema,
  loginSchema
};
