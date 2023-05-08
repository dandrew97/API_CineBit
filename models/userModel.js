//Importamos la libreria de mongoose
const mongoose = require('mongoose');


//?Variable que guarda la direccion para la conexión a la base de datos 
const uri = //pendiente mirar el video de la ultima clase para la conexion correcta a la bd
//Función que permite la conexión a la base de datos y muestra por consola si es exitoso o hubo algun error. 
mongoose.connect(uri,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
.then(() => console.log("conexion exitosa de bd"))
.catch(err => console.log("error al conectar bd", err));


//*Este es el modelo de la colección de Userss para la base de datos CineBit
// Definimos el esquema para la colección "userss"
const userSchema = new mongoose.Schema({
    _id: ObjectId
    , //? Unique ID of the user
    username: {
        type: String,
        require: true
    }, //? User's nickname
    name: {
        type: String,
        required: true
    }, //? User's name
    lastNames: {
        type: String,
        required: true
    }, //? User's last names
    email: {
        type: String,
        required: true,
        unique: true
    }, //? User's email address
    phone: {
        type: Number,
        required: true,
        unique: true
    }, //? User's phone number
    password: {
        type: String,
        required: true
    }, //? User's password
    isChildProfile: {
        type: Boolean,
        required: true
    }, //? Flag to indicate if the user's profile is for a child
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'imgAvatar'
    }, //? Flag to indicate if the user's profile is for a child
    preferences: [String]
    , //? User's selected preferences
    history: [{
        contentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Content'
        } //TODO: ID of the content viewed by the user
    }], //? User's history of viewed content
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }] //? Content selected as favorite by the user
});

// Creamos los modelos a partir del esquema
module.exports = mongoose.model('Users', userSchema);