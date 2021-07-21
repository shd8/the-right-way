# The Right Way - Fernando Gomez Graciani

## Steps to use the app

1. git clone git@github.com:shd8/the-right-way.git
2. cd the-right-way
3. cd e-commerce

### Raise the backend
1. cd backend
2. npm init --yes
3. npm i
4. Create .env file in backend folder following the pattern of .env.example
5. Import the collections users.json and products.json to the collections folder indicated in .env for MongoDB
6. npm start
7. You should see the message: app: mongoose database connection stablished

### Raise the frontend
1. cd frontend
2. npm init --yes
3. npm i (wait for all node modules to be installed)
4. Create .env following the example of .env.example
5. npm start
6. Acess http://localhost:8080/
7. With the backend up, you should see the different products in the different sections of the application and be able to register and log in.

### Run the tests
1. cd frontend
2. npm jest
3. npm run test:unit