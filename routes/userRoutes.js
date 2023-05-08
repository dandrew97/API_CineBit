const express = require('express')

// función para asignar las rutas 
const router = express.Router();

//Variable que guarda la importación de las funciones creadas en el controlador para gestionar las peticiones
const userController = require('../controllers/userController');


//? Funciones que permiten gestionar las peticiones con los verbos(metodos) HTTP
router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/', userController.deleteUser);


//Exporta el fichero de las rutas
module.exports = router;