const precio = '42,99€'
const unidades = 3

const total = parseFloat(precio.replace(',', '.').replace('€','')) * unidades

console.log(total)
console.log(typeof(total))