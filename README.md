## Projet de Gestion des Utilisateurs

Ce projet consiste en la création d'une API utilisant Symfony pour la gestion des utilisateurs avec des opérations CRUD (Create, Read, Update, Delete). Le front-end a été développé en React pour interagir avec cette API. 


## Instructions d'Utilisation

### Prérequis

- Docker
- Node.js

### Installation et Exécution

1. Cloner le repository du projet.
2. Accéder au dossier `api-symfony` et lancer le conteneur Symfony avec Docker :
    ```
    docker-compose up
    ```
3. Accéder au dossier `front-react` et installer les dépendances Node.js :
    ```
    npm install
    ```
4. Lancer l'application React :
    ```
    npm start
    ```
5. Accéder à l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Technologies Utilisées

- **Symfony** : Framework PHP utilisé pour l'API.
- **React** : Bibliothèque JavaScript utilisée pour le front-end.
- **MySQL** : Base de données relationnelle pour stocker les données des utilisateurs.
- **Docker** : Pour la gestion des conteneurs.
- **Webpack** : Pour la compilation et le packaging du front-end React.



### Fonctionnalités de l'API Symfony :

L'API Symfony offre les fonctionnalités CRUD suivantes pour la gestion des utilisateurs :

- **Create** : Permet de créer un nouvel utilisateur avec les informations fournies.
- **Read** : Permet de récupérer les détails d'un utilisateur spécifique ou la liste de tous les utilisateurs.
- **Update** : Permet de mettre à jour les informations d'un utilisateur existant.
- **Delete** : Permet de supprimer un utilisateur de la base de données.

### Fonctionnalités du Front-end React :

Le front-end React offre une interface utilisateur conviviale pour interagir avec l'API Symfony. Il comprend les fonctionnalités suivantes :

- Affichage de la liste des utilisateurs.
- Formulaire pour créer un nouvel utilisateur.
- Affichage des détails d'un utilisateur spécifique.
- Possibilité de mettre à jour les informations d'un utilisateur.
- Fonctionnalité de suppression d'un utilisateur.

### Structure du Projet :

```csharp
back-api-users/
│
├── api-symfony/ # Dossier contenant le code source de l'API Symfony
│ ├── src/ # Code source Symfony
│ ├── config/ # Configuration Symfony
│ └── ...
│
└── front-react-users/ # Dossier contenant le code source du front-end React
├── src/ # Code source React
├── node_modules/ # Dépendances Node.js
├── package.json # Configuration du projet Node.js
└── ...
```

## Auteur

Enstso Janvier

