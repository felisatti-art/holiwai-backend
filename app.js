const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler'); // Middleware errori

const app = express();

// Middleware globali
app.use(cors());
app.use(express.json());

// Rotte
app.use('/api/auth', authRoutes);

// Rotta di test
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Middleware di gestione errori (DEVE essere l’ultimo)
app.use(errorHandler);

module.exports = app;
