const db = require('../utils/db');

exports.findProducts = (searchQuery, callback) => {
    const sql = 'SELECT * FROM Produits WHERE nom LIKE ?';
    db.query(sql, [`%${searchQuery}%`], (err, results) => {
        callback(err, results);
    });
};
