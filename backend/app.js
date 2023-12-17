const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar las solicitudes POST a /messages
app.post('/messages', (req, res) => {
  const { name, email, message } = req.body;

  // Lógica para almacenar los datos en la base de datos o realizar otras acciones

  // Responde con un mensaje de éxito
  res.status(200).json({ success: true, message: 'Mensaje recibido correctamente' });
});

// Ruta principal para manejar solicitudes GET
app.get('/', (req, res) => {
  res.send('¡Servidor backend en funcionamiento!');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
