function saluda(){
    console.log('Hola Mundo')
}
function despide(){
    console.log('Agur')
}

module.exports.saluda = saluda
module.exports.despide = despide

/* O también podemos usar
module.exports = {
    saluda:saluda,
    despide:despide
}
*/