-- Crée la table Produits si elle n'existe pas
CREATE TABLE IF NOT EXISTS Produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL, -- Ajout d'un champ pour le prix
    date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP -- Ajout d'un champ pour la date d'ajout
);

-- Insérer des produits exemple dans la table Produits
INSERT INTO Produits (nom, description, prix) VALUES
('Produit 1', 'Description du produit 1', 10.99),
('Produit 2', 'Description du produit 2', 15.49),
('Produit 3', 'Description du produit 3', 8.99),
('Produit 4', 'Description du produit 4', 12.99),
('Produit 5', 'Description du produit 5', 5.99);

-- Sélectionner tous les produits pour vérifier
SELECT * FROM Produits;
