import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

// Ruta para agregar usuarios (POST /api/user)
router.post('/user', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validar el rol
        if (!['BOOSTER', 'BUSINESS'].includes(role)) {
            return res.status(400).send('Invalid role');
        }

        // Crear usuario en la base de datos
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role,
            },
        });

        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Ruta para obtener todos los usuarios (GET /api/user)
router.get('/user', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
