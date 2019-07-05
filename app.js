const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv

const color = require('colors');



let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(`operacion: ${resultado}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}