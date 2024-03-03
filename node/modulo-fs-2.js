const fs = require('fs')
let contador = 0
const cadenaRandom = ()=>{
    return Math.random().toString()+'\n'
}
let intervalo = setInterval(()=>{
    fs.appendFile('./data/registro.log', cadenaRandom(), (error)=>{
        new Error(error)
    })
    contador++
    if(contador==5){
        clearInterval(intervalo)
        console.log('Se ha guardado toda la info')
    }
}, 100)