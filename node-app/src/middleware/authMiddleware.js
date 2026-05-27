const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // 1) Controllo header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Accesso negato: token mancante o non valido',
      });
    }

    // 2) Estraggo il token
    const token = authHeader.split(' ')[1];

    // 3) Verifico il token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4) Recupero l’utente dal DB
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Utente non trovato o non autorizzato',
      });
    }

    // 5) Attacco l’utente alla request
    req.user = user;

    // 6) Passo al prossimo middleware / controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token non valido o scaduto',
    });
  }
};

module.exports = authMiddleware;
