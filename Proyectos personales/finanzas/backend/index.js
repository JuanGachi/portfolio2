const express = require('express');
const cors = require('cors'); // Importa el middleware cors
const mongoose = require('mongoose'); // Importa mongoose para la conexión a MongoDB
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB (asegúrate de usar la URI correcta para tu base de datos)
mongoose.connect('mongodb://localhost:27017/finanzas_personales', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verificar la conexión con MongoDB
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a MongoDB'));

// Importar las rutas de transacciones y autenticación
const transactionRoutes = require('./routes/transactions');
const authRoutes = require('./routes/auth'); // Importar rutas de autenticación

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para analizar JSON en las solicitudes
app.use(express.json());

// Conectar las rutas de autenticación y transacciones
app.use('/auth', authRoutes); // Conectar las rutas de autenticación
app.use('/transactions', transactionRoutes); // Conectar las rutas de transacciones

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

