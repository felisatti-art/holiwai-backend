// src/middleware/errorHandler.js

// Middleware di gestione errori globale
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || 'Errore del server.'
  });
};

module.exports = errorHandler;
