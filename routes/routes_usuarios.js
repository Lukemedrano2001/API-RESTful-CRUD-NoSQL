// Rotas para Arquivos
import express from 'express';
const router = express.Router();

import { 
    createUsuario, 
    getAllUsuarios, 
    getUsuariobyId, 
    updateUsuario, 
    deleteUsuario 
} from '../controllers/controller.js';



// Create
router.post('/create/usuario', createUsuario);


// Get All
router.get('/read/usuarios', getAllUsuarios);


// Get by Id
router.get('/read/usuario/:id', getUsuariobyId);


// Update
router.put('/update/usuario/:id', updateUsuario);


// Delete
router.delete('/delete/usuario/:id', deleteUsuario);


export default router;