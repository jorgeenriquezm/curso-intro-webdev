const cuenta = document.querySelector('#cuentaAtras')
const circulo = document.querySelector('#circulo')
let momentoInicial
let momentoClick
function mideTiempo(e){
    //console.log(e.timeStamp)
    momentoClick = Date.now()
    const transcurrido = momentoClick-momentoInicial
    console.log(`Has tardado ${transcurrido/1000} segundos.`)
    console.log(`El timestamp es de  ${(e.timeStamp-3000)/1000} segundos.`)
}
let intervalo = setInterval(()=>{
    let restantes = parseInt(cuenta.innerHTML)
    restantes--
    cuenta.innerHTML = restantes
    if(restantes==0){
        momentoInicial = Date.now()
        clearInterval(intervalo)
        cuenta.style.display='none'
        circulo.style.display='flex'
        circulo.style.top = ((Math.random()*80)+10)+'%'
        circulo.style.left = ((Math.random()*80)+10)+'%'
        circulo.addEventListener('click', (e)=>{mideTiempo(e)})
    }
}, 1000)