const argv=require('yargs')
             .option('b', {
                alias:"base",
                type: "number",
                demandOption: true,
                describe: 'Es la base de la tabla de Multiplicacion'
             })
             .option('l', {
               alias:"listar",
               type: "boolean",
               default: false,
               describe: 'Muestra la tabla en consola'
            })
            .option('h', {
               alias:"hasta",
               type: "number",
               default: 10,
               describe: 'Muestra hasta que punto llega la tabla'
            })   
             .check( (argv, options) =>{
                if (isNaN(argv.base, argv.hasta)) {
                   throw 'La base tiene que ser un numero'
                }
                return true;
             })
             .argv;

module.exports = argv;