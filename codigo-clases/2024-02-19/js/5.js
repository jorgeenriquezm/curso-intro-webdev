const cuenta = document.querySelector('#cuentaAtras')
const circulo1 = document.querySelector('#circulo1')
const circulo2 = document.querySelector('#circulo2')
let clickInicial = 0
let clickFinal = 0
function clickEnBoton(){
    if(clickInicial==0){
        clickInicial = Date.now()
        console.log('Seteado el momento inicial')
    }else{
        clickFinal = Date.now()
        console.log('Seteado el segundo click')
    
        const transcurrido = clickFinal-clickInicial
        alert(`Has tardado ${transcurrido/1000} segundos.`)
        const recordActual = localStorage.getItem('contador_click_boton_doble')
        if(recordActual){
            if(parseInt(recordActual)>transcurrido){
                localStorage.setItem('contador_click_boton_doble', transcurrido)
                console.log('Se ha guardado el tiempo.')
                alert(`Has guardado un nuevo récord.`)
            }
        }else{
            localStorage.setItem('contador_click_boton_doble', transcurrido)
            console.log('Se ha guardado el tiempo.')
        }
    }
}
let intervalo = setInterval(()=>{
    let restantes = parseInt(cuenta.innerHTML)
    restantes--
    cuenta.innerHTML = restantes
    if(restantes==0){
        clearInterval(intervalo)
        cuenta.style.display='none'
        circulo1.style.display='flex'
        circulo1.style.top = ((Math.random()*80)+10)+'%'
        circulo1.style.left = ((Math.random()*80)+10)+'%'  
        circulo1.addEventListener('click', clickEnBoton)

        circulo2.style.display='flex'
        circulo2.style.top = ((Math.random()*80)+10)+'%'
        circulo2.style.left = ((Math.random()*80)+10)+'%'  
        circulo2.addEventListener('click', clickEnBoton)
    }
}, 1000)