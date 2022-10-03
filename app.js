const {crearArchivo }=require('./helpers/multiplicar');
const colors=require('colors');
const argv = require('./config/yargs');

console.clear();


crearArchivo(argv.base, argv.listar, argv.h)
   .then(nombreArchivo=>console.log(nombreArchivo.rainbow, "Creado"))
    .catch(err=>console.log(err));