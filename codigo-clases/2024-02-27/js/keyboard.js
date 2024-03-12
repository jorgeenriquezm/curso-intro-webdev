const cpu = document.querySelector('#cpu .barra')
let alturaCPU = 1

const keyboard = document.querySelector('#keyboard .barra')
let alturaKeyboard = 1

function diGanador(ganador){
    alert(`El ganador de la partida es ${ganador}.`)

}
function sumaKeyboard(e){   
    console.log(e) 
        alturaKeyboard++
        if(alturaKeyboard>100){
            diGanador('keyboard')
            clearInterval(intervalo)
            document.removeEventListener('keyup', sumaKeyboard)
        }else{
            keyboard.style.height = `${alturaKeyboard}%`
        }
    
}

document.addEventListener('keyup', sumaKeyboard)

const intervalo = setInterval(()=>{
    alturaCPU++
    if(alturaCPU>100){
        diGanador('cpu')
        clearInterval(intervalo)
        console.log(alturaCPU)
    }else{
        cpu.style.height = `${alturaCPU}%`
    }
}, 200)