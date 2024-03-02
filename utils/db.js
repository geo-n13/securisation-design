const mysql = require('mysql');

// Création de la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connexion à la base de données
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données MySQL : ' + err.message);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

module.exports = db;
