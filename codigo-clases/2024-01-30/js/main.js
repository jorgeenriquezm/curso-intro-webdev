let contador = 0
function clickHecho(evento){
    console.log(evento.target)
    contador++
    console.log(`Has clicado el div ${contador} veces.`)
    if(contador==3){
        console.log('El click se va desactivar en 5 segundos.')
        setTimeout(()=>{
            document.querySelector('div').removeEventListener('click', clickHecho)
            console.log('Ya se ha desactivado.')
        }, 5000)
        
    }
}
document.querySelector('div').addEventListener('click', clickHecho)


let contador2 = 0
let intervalo = setInterval(()=>{
    contador2++
    if(contador2==10){
        console.log('Hemos llegado a 10')
        clearInterval(intervalo)
    }
    console.log('Ha pasado un segundo... ' + contador2)
}, 1000)

//elemento.addEventListener(cual, función)