const semaforo1 = document.querySelector('#semaforo1')
const semaforo2 = document.querySelector('#semaforo2')
const semaforo3 = document.querySelector('#semaforo3')

document.querySelector('#boton1').addEventListener('click', function(ev){
    //Esta función que se ejecuta tras el click recibe un parámetro "ev"
    //Ese parametro no da muchísima información
    console.log(ev) //nos saca TODA la info del evento
    console.log(ev.target) //nos dice que elemento se ha clicado
    semaforo1.innerHTML=''
    semaforo1.style.backgroundColor="#f5909f"
})
document.querySelector('#boton2').addEventListener('click', function(){
    semaforo2.innerHTML=''
    semaforo2.style.backgroundColor="#f5909f"
})
document.querySelector('#boton3').addEventListener('click', function(){
    semaforo3.innerHTML=''
    semaforo3.style.backgroundColor="#f5909f"
})