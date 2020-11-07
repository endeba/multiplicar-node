//REQUIREDS
//const multiplicar = require('./multiplicar/multiplicar')
const argv = require("./config/yargs").argv;
const colors = require("colors");
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log("crear");
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${colors.red(archivo)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
}

//let base = "abc";


//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split("=")[1];
console.log(argv.base);
console.log(argv.limite);