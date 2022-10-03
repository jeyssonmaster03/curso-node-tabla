const fs = require("fs");
const crearArchivo = async (numero = 5, listar=false, hasta=10) => {
const colors=require('colors');
    try {

      
        let salida, consola = "";
        
        for (let contador = 1; contador <= hasta; contador++) {
          salida += `${numero} x ${contador}=${numero * contador}\n`;
          consola += `${numero} ${'x'.green} ${contador}${'='.green}${numero * contador}\n`;
        }

        if(listar){

          console.log("======================".green);
          console.log('Tabla del:', colors.blue(numero));
          console.log("======================".green);
        
          console.log(consola);
        }
      
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
      
        return `tabla-${numero}.txt`;
      }
        
     catch (err) {
        throw err;
    }
}

 

module.exports = {
  crearArchivo,
};
