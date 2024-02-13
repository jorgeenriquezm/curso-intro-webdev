const miBody = document.querySelector('body')
let sliderRojo = document.querySelector('#rojo')
let campoRojo = document.querySelector('#campoRojo')
let valorRojo = 255
let sliderAzul = document.querySelector('#azul')
let campoAzul = document.querySelector('#campoAzul')
let valorAzul = 255
let sliderVerde = document.querySelector('#verde')
let campoVerde = document.querySelector('#campoVerde')
let valorVerde = 255


function cambiaColorBody(r, v, a){
    miBody.style.backgroundColor=`rgb(${r}, ${v}, ${a})`
}
function pillaValor(e){
    //Modificamos valores según el input que hayamos manipulado
    if(e.target==sliderRojo){
        valorRojo = e.target.value
        campoRojo.innerHTML = valorRojo
    }else if(e.target==sliderAzul){
        valorAzul = e.target.value
        campoAzul.innerHTML = valorAzul
    }else{
        valorVerde = e.target.value
        campoVerde.innerHTML = valorVerde
    }
    //Y llamamos la función que cambia el fondo
    cambiaColorBody(valorRojo, valorVerde, valorAzul)
}

sliderRojo.addEventListener('input', (e)=>{
    //En los tres inputs vamos a llamar a esta función y le vamos a pasar la info del evento
    pillaValor(e)    
})
sliderAzul.addEventListener('input', (e)=>{
    pillaValor(e)
})
sliderVerde.addEventListener('input', (e)=>{
    pillaValor(e)
})
//Sería más dinámico el seleccionar todos los inputs y añadir el listener
//con un forEach, pero para que os quede más claro el código, lo dejo así