
const express = require('express');
require('dotenv').config();
//------------------------------------

//Crear servisor express
const app = express();
//------------------------------------
//Lectura y parseo del body
app.use( express.json());


//------------------------------------
//Directorio Público
app.use( express.static('public') );
//------------------------------------

//Rutas
app.use('/api/auth', require('./routes/auth'));
//------------------------------------


//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});//------------------------------------