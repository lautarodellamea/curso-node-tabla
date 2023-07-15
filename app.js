// el requiere es para requerir paquetes o modulos
const { number } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
// const { argv } = require("process");
var colors = require('colors');


// FORMA 2
// mas eficiente
// usando yargs
const  argv = require("./config/yargs");

console.clear();

// console.log(argv)
// console.log("base: yargs", argv.base)

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));



// npm app --help
// npm app -h (abreviatura de una bandera)














// FORMA 1
// node app --base=10
/* const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base); */
// esto es muy ineficiente ya que si mandaria "node app --base=10 limit=10 5" deberia hacer muchas validaciones y ver que el orden sea el correcto, para ello existe un paquete llamado YARGS

/* crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err)); */

// argv es de argumentos

// creacion package.json manualmente
// npm init

