const semaforo1 = document.querySelector('#semaforo1')
const semaforo2 = document.querySelector('#semaforo2')
const semaforo3 = document.querySelector('#semaforo3')

document.querySelector('#boton1').addEventListener('click', function(){
    semaforo1.innerHTML=''
})
document.querySelector('#boton2').addEventListener('click', function(){
    semaforo2.innerHTML=''
})
document.querySelector('#boton3').addEventListener('click', function(){
    semaforo3.innerHTML=''
})