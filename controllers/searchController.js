const productModel = require('../models/productModel');

exports.searchProducts = (req, res) => {
    const query = req.query.query;
    productModel.findProducts(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erreur interne du serveur' });
        } else {
            res.json(results);
        }
    });
};
