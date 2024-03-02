require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const searchRoutes = require('./routes/searchRoutes');

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', searchRoutes);

// Route par défaut pour la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
