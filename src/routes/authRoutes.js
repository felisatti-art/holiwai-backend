// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();

const {
  register,
  login,
  getMe
} = require('../controllers/authController');

const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../validators/authValidator');

// @route   POST /api/auth/register
// @desc    Registrazione utente
// @access  Public
router.post('/register', validate(registerSchema), register);

// @route   POST /api/auth/login
// @desc    Login utente
// @access  Public
router.post('/login', validate(loginSchema), login);

// @route   GET /api/auth/me
// @desc    Dati utente corrente
// @access  Private
router.get('/me', authMiddleware, getMe);

module.exports = router;
