const columnaT = document.querySelector('#keyboard>div')
const columnaC = document.querySelector('#cpu>div')
let alturaT = 0
let alturaC = 0


document.addEventListener('keyup', (e)=>{
    console.log(e.key)
    if(e.key=='ArrowUp'){
        columnaT.style.height = `${alturaT}%`
        alturaT+=0.5
    }
})



let intervaloCPU = setInterval(()=>{
    columnaC.style.height = `${alturaC}%`
    alturaC+=0.5
    if(alturaC>100){
        alturaC = 100
        clearInterval(intervaloCPU)
    }
}, 160)