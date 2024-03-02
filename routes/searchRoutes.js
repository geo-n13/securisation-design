const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

// Route pour la recherche de produits
router.get('/search', searchController.searchProducts);

module.exports = router;
