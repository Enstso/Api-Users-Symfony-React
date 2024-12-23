## User Management Project

This project involves the creation of an API using Symfony for user management with CRUD (Create, Read, Update, Delete) operations. The front-end was developed in React to interact with this API.


## Usage Instructions

### Prerequisites

- Docker
- Node.js

### Installation and Running

1. Clone the project repository.
2. Go to the `api-users` folder and start the Symfony container with Docker :
    ```
    docker-compose up
    ```
3. Navigate to the `front-react-users` and install the Node.js dependencies :
    ```
    npm install
    ```
4. Run the React application :
    ```
    npm start
    ```
5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **Symfony** : PHP framework used for the API.
- **React** : JavaScript library used for the front-end.
- **MySQL** : Relational database for storing user data.
- **Docker** : For container management.
- **Webpack** : For compiling and bundling the React front-end.



### Symfony API Features :

The Symfony API offers the following CRUD features for user management :

- **Create** : Allows the creation of a new user with the provided information.
- **Read** : Allows fetching details of a specific user or a list of all users.
- **Update** : Allows updating the information of an existing user.
- **Delete** : Allows deleting a user from the database.

### React Front-end Features :

The React front-end provides a user-friendly interface to interact with the Symfony API. It includes the following features :

- Displaying a list of users.
- A form to create a new user.
- Viewing details of a specific user.
- Ability to update an existing user's information.
- Functionality to delete a user.

### Structure du Projet :

```csharp
back-api-users/
│
├── api-symfony/  # Folder containing the Symfony API source code
│ ├── src/ # Symfony source code
│ ├── config/ # Symfony configuration
│ └── ...
│
└── front-react-users/ # Folder containing the React front-end source code
├── src/ # React source code
├── node_modules/ # Node.js dependencies
├── package.json # Node.js project configuration
└── ...
```

