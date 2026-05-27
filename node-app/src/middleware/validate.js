// src/middleware/validate.js

// Middleware generico per validare il body con uno schema Joi
const validate = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false, // raccoglie tutti gli errori
      stripUnknown: true // rimuove campi non previsti dallo schema
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const messages = error.details.map((detail) => detail.message);
      return res.status(400).json({
        message: 'Dati non validi.',
        errors: messages
      });
    }

    // body validato e pulito
    req.body = value;
    next();
  };
};

module.exports = validate;
