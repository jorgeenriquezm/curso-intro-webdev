const fs = require('fs')
const info = fs.readFileSync('./data/info.txt')
const parseada = JSON.parse(info.toString().trim());
console.log(parseada.data[0])