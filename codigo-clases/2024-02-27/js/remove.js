let contador = 1
function hazAlgo(e){
    console.log(e)
}
document.addEventListener('keyup', function(e){
    hazAlgo(e)
})


const elemento = document.querySelector('div')
let intervalo = setInterval(()=>{
    contador++
    if(contador>=100){
        clearInterval(intervalo)
        document.removeEventListener('keyup', (e)=>{
            hazAlgo(e)
        })
    }
    elemento.style.height=`${contador}%`
}, 100)