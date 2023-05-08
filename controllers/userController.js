//Variable que guarda la importación del modelo que fue exportado en el fichero userModel.js
const userModel = require('../models/userModel');


// funcion que permite exportar metodos o clases para poder ser usados en otros ficheros
exports.getAllUsers = (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error: err.message}))
}


//* Forma de crear variables llamada estructuración de objeto que permite extraer valores de un objeto y asignarlos a una linea de codigo
//Funcion que permite crear nuevos usuarios en la base de datos 
exports.createUser =(req, res) => {
    const {username, email, password} = req.body;
    const newUser = new userModel ({
        username, email, password
    });
    newUser.save()
    .then(newUser => res.status(201).json({sucess: 'created'}))
    .catch(err => res.status(500).json({message: 'An error has ocurred', err}))
};


// Función que permite actualizar datos de los usuarios
exports.updateUser = (req, res) => {
    const {id} = req.params;
    const {username, email, password} = req.body;
    userModel.findByIdAndUpdate(id, {username, email, password}, {new: true})
    .then(user => {
        if(!user)throw new Error(`user with id ${id} not found`);
        res.status( 200 ).json(user)
    
    })
    .catch( err => res.status(500).json({message: 'An error has ocurred', err}))
};


//Funcion que permite eliminar usuarios
exports.deleteUser = (req, res) => {
    const {id} = req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with id ${id} not found`);
        res.status( 200 ).json({message: 'user deleted'})
    })
    .catch( err => res.status(500).json({message: 'An error has ocurred', err}))
};