let fechaFinal = new Date(2024, 2, 21)
let campo = document.querySelector('main')
function ms2Meses(ms){
    return ms/1000/60/60/24/30
}
function meses2Ms(meses){
    return ms*1000*60*60*24*30
}
function convierteDiferencia(diferencia){
    //Convertimos los ms que recibimos a meses de 30 días
    const meses = Math.floor(ms2Meses(diferencia))
    const dias = Math.floor(diferencia-meses2Ms)
    console.log(dias)
    let horas = 0
   
    campo.innerHTML = `${meses}:${dias}:${horas}`
}

let intervalo = setInterval(()=>{
    let fechaActual = new Date()
    convierteDiferencia(fechaFinal-fechaActual)
}, 1000)