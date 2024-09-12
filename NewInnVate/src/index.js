import express from 'express';
import userRoutes from './routes/user.route.js'; // Ajusta la ruta según tu estructura de archivos

const app = express();

app.use(express.json());

// Configura las rutas para manejar solicitudes
app.use('/api', userRoutes);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
