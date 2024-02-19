const cuenta = document.querySelector('#cuentaAtras')
const contenedor = document.querySelector('#contenedor')
let lastClicked = 0
let momentoInicial
let momentoFinal

function initBotones(cuantos){
    for(i=1;i<=cuantos;i++){
        let circulo = document.createElement('div')
        circulo.classList.add('circulo')


        let posicion = document.createElement('p')
        posicion.innerHTML=i
        posicion.classList.add('posicion')


        circulo.appendChild(posicion)



        circulo.style.display='flex'
        circulo.style.top = ((Math.random()*80)+10)+'%'
        circulo.style.left = ((Math.random()*80)+10)+'%'

        posicion.addEventListener('click', (e)=>{botonClicado(e)})

        contenedor.appendChild(circulo)



    }
}

function botonClicado(evento){
    if(lastClicked==0){
        momentoInicial = Date.now()
    }else if(lastClicked==4){
        momentoFinal = Date.now()
        alert(`Has tardado ${(momentoFinal-momentoInicial)/1000} en clicar los botones.`)
    }
    console.log(evento.target)
    evento.stopPropagation()
    const cual = parseInt(evento.target.innerHTML)
    if(cual-1===lastClicked){
        console.log('Has acertado el botón '+cual)
        lastClicked=cual
        evento.target.style.display='none'
        if(evento.target.parentNode){
            evento.target.parentNode.style.display='none'
        }
        evento.target.removeEventListener('click', (e)=>{botonClicado(e)})
    }else{
        alert("Has fallado")
    }
}


let intervalo = setInterval(()=>{
    let restantes = parseInt(cuenta.innerHTML)
    restantes--
    cuenta.innerHTML = restantes
    if(restantes==0){
        clearInterval(intervalo)
        cuenta.style.display='none'
        initBotones(5)
    }
}, 1000)