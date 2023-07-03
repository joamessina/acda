const express = require('express');
const { Sequelize } = require('sequelize');
const routes = require('./routes/routes'); // Suponiendo que tienes un archivo de rutas

// Inicializando Express
const app = express();

// Middleware para permitir el uso de req.body
app.use(express.json());

// Inicializando Sequelize
const sequelize = new Sequelize('acda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Autenticación a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida.'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Sincronizar todos los modelos con la base de datos
sequelize.sync();

// Utilizando las rutas
app.use('/api', routes);

// Iniciando el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
