const cuenta = document.querySelector('#cuentaAtras')
const circulo = document.querySelector('#circulo')
let momentoInicial
let momentoClick
function mideTiempo(){
    momentoClick = Date.now()
    const transcurrido = momentoClick-momentoInicial
    alert(`Has tardado ${transcurrido/1000} segundos.`)
    const recordActual = localStorage.getItem('contador_click_boton')
    if(recordActual){
        if(parseInt(recordActual)>transcurrido){
            localStorage.setItem('contador_click_boton', transcurrido)
            console.log('Se ha guardado el tiempo.')
            alert(`Has guardado un nuevo récord.`)
        }

    }else{
        localStorage.setItem('contador_click_boton', transcurrido)
        console.log('Se ha guardado el tiempo.')
    }
}
let intervalo = setInterval(()=>{
    let restantes = parseInt(cuenta.innerHTML)
    restantes--
    cuenta.innerHTML = restantes
    if(restantes==0){
        clearInterval(intervalo)
        cuenta.style.display='none'
        circulo.style.display='flex'
        circulo.style.top = ((Math.random()*80)+10)+'%'
        circulo.style.left = ((Math.random()*80)+10)+'%'
        momentoInicial = Date.now()
        circulo.addEventListener('click', mideTiempo)
    }
}, 1000)