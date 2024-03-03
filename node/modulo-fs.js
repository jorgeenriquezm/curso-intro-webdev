const fs = require('fs')

const info = fs.readFileSync('./data/usuarios.txt')

const parseada = JSON.parse(info.toString().trim());

console.log(parseada.data[0])
