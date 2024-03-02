### Lancement de l'application

- Cloner le répertoire dans un dossier
- Effectuer un `npm install` pour installer les dépendances
- Créer la base de données MySQL manuellement | Executer le script de création exemple (db.sql)
- Lancer l'application à l'aide de la commande `node app.js`

---

Lors de la création d'applications web, la sécurité est une préoccupation majeure, en particulier lorsqu'il s'agit de manipuler les données d'une base de données. Voici un rapport sur les mesures de sécurité appliquées dans le code que j'ai fourni, avec des explications sur la manière dont elles contribuent à éviter les injections SQL :

### Mesures de Sécurité Prises

1. **Utilisation des Placeholders dans les Requêtes SQL**
   Le code utilise des placeholders (`?`) pour les requêtes SQL, ce qui est une pratique standard pour prévenir les injections SQL. Cela garantit que les valeurs insérées dans les requêtes SQL sont correctement échappées par le driver MySQL, ce qui empêche l'exécution de code SQL malveillant. Par exemple :

   ```javascript
   const sql = 'SELECT * FROM Produits WHERE nom LIKE ?';
   db.query(sql, [`%${searchQuery}%`], callback);
   ```

   Dans cette requête, `?` est un placeholder pour la valeur `searchQuery`, qui est fournie par l'utilisateur. Le driver MySQL remplace le `?` par la valeur `searchQuery`, après l'avoir échappée pour prévenir les injections SQL.

2. **Validation des Entrées Utilisateur**
   Bien que non montré explicitement dans les extraits de code, la validation des entrées utilisateur est une étape critique pour sécuriser les applications web. Elle doit être mise en place pour s'assurer que les données fournies correspondent aux attentes avant de les traiter. Des librairies comme `express-validator` peuvent être utilisées pour cette validation côté serveur.

3. **Éviter l'Affichage de Messages d'Erreur SQL Détaillés**
   Les messages d'erreur SQL détaillés peuvent fournir des informations utiles aux attaquants. Pour éviter cela, le code renvoie des messages d'erreur génériques en cas de défaillance de la requête SQL. Par exemple :

   ```javascript
   if (err) {
       res.status(500).json({ error: 'Erreur interne du serveur' });
   }
   ```

4. **Sécurisation des Informations de Connexion à la Base de Données**
   Les informations de connexion à la base de données sont stockées dans des variables d'environnement, qui sont moins susceptibles d'être exposées que si elles étaient écrites en dur dans le code. Cela aide à prévenir les fuites d'informations sensibles.

### Code Actuel et Recommandations pour l'Amélioration de la Sécurité

Le code actuel inclut des mesures de base pour sécuriser les requêtes SQL contre les injections SQL. Cependant, il y a toujours de la place pour l'amélioration. Voici quelques recommandations supplémentaires pour renforcer la sécurité :

1. **Utiliser un ORM ou un Query Builder**
   Utiliser un ORM (Object-Relational Mapping) tel que Sequelize ou un Query Builder comme Knex.js peut offrir une couche de sécurité supplémentaire. Ces outils fournissent une abstraction qui aide non seulement à sécuriser les requêtes, mais également à les rendre plus lisibles et plus faciles à maintenir.

2. **Mettre en Place une Validation Plus Stricte**
   Implémentez une validation plus stricte des entrées utilisateur à l'aide de regex ou de librairies de validation, pour s'assurer que les données entrées correspondent exactement au type de données attendu.

3. **Utiliser des Transactions**
   Pour les opérations complexes qui nécessitent plusieurs étapes ou modifications dans la base de données, utilisez des transactions. Cela permet de s'assurer que toutes les opérations s'exécutent avec succès ou que toutes échouent ensemble, maintenant ainsi l'intégrité des données.

4. **Tester la Sécurité**
   Effectuez des tests de sécurité, tels que des tests de pénétration, pour identifier et corriger les failles de sécurité potentielles.

5. **Mise à Jour Régulière des Dépendances**
   Gardez toutes les dépendances du projet à jour, car les nouvelles versions incluent souvent des correctifs de sécurité pour les vulnérabilités récemment découvertes.

6. **Utiliser des Middleware de Sécurité**
   Utilisez des middleware comme `helmet` pour Express, qui peuvent aider à sécuriser votre application en définissant divers en-têtes HTTP.

En suivant ces recommandations et en restant informé des meilleures pratiques de sécurité, vous pouvez renforcer la sécurité de votre application