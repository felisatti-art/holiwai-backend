const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = require('./src/app');   // ← PERCORSO CORRETTO
const connectDB = require('./src/config/db');  // ← ANCHE QUESTO CORRETTO

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
