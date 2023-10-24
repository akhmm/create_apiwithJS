# create_apiwithJS

Créer une API qui répond en JSON :
Une route qui retourne un tableau de ressources (utilisateurs, commentaires, licornes… peu importe !)
Une route qui renvoie un seul élément de ce tableau en fonction de son id.
Dans la route qui renvoie tout le tableau, ajoutez console.log(req.query) et visitez http://localhost:3310/things?limit=2. Regardez le terminal où nodemon a été lancé, vous devriez voir la propriété limit de la “query string”.
Utilisez cette propriété pour servir une partie seulement du tableau. Si aucune limit n'a été spécifiée, la route devrait retourner un maximum de 10 éléments par défaut.
Avoir un autre paramètre pour filtrer la liste en fonction d'une propriété sur vos objets (par exemple, pour ne récupérer que des posts avec la catégorie JS : http://localhost:3310/posts?category=JS).
