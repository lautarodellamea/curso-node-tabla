// requerir paquetes - require
// le colocamos fs de filesistem pero podemos poner lo que uqerramos
const fs = require("fs");
var colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if(listar){
      console.log("=================".green);
      console.log("  Tabla del: ".green, colors.blue(base));
      console.log("=================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw err;
  }
};

module.exports = {
  // crearArchivo: crearArchivo
  crearArchivo,
};
