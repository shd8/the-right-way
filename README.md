# The Right Way - Fernando Gomez Graciani

## Pasos para probar la aplicación

1. git clone git@github.com:shd8/the-right-way.git
2. cd the-right-way
3. cd e-commerce

### Levantar el backend
1. cd backend
2. npm init --yes
3. npm i
4. Crear archivo .env en la carpeta backend siguiendo el patrón de .env.example
5. Importar las colecciones users.json y products.json a la carpeta de colecciones indicada en .env para MongoDB
6. npm start
7. Debería verse el mensaje: app:mongoose database connection stablished

### Levantar el frontend
1. cd frontend
2. npm init --yes
3. npm i (esperar a que se instalen todos los módulos de node)
4. Crear .env siguiendo el ejemplo de .env.example
5. npm start
6. Acceder a http://localhost:8080/
7. Con el backend levantado deberían verse los diferentes productos en las diferentes secciones de la aplicación y poder registrarse hacer log in.

### Ejecutar los test
1. cd frontend
2. npm jest
3. npm run test:unit