//Importamos Express
const express = require('express');
const app = express();

//Importamos method-override
const methodOverride = require('method-override');

//Importamos Path
const path = require('path');

app.set('views', path.resolve(__dirname, './views'));
app.set('views engine', 'ejs'); //JavaScript Embedido

app.set(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.set(express.static(path.resolve(__dirname, '../public'))); //Para los recursos estaticos

//Levantamos el servidor
app.listen('3005',() => console.log('Servidor en el puerto 3005, levantado'));