//El elemento en el que vamos a escribir 
let pantalla = document.querySelector('#pantalla')
//Tendremos el texto de la pantalla en una variable para mayor flexibilidad con el código
let textoPantalla = '0'
let btnEncendido = document.querySelector('#btn-encendido')
//Grupo con TODOS los botones numéricos 0-9
let botonesNumeros = document.querySelectorAll('.boton-numero')
//Grupo con todos los botones de operaciones
let botonesOperadores = document.querySelectorAll('.boton-operacion')
let operadoresActivados=false

function desactivaOperadores(){
    operadoresActivados=false
    botonesOperadores.forEach(boton=>{
        boton.style.cursor='default'
        boton.removeEventListener('click', operadorClicado)
    })
}
function operadorClicado(cual){
    console.log(cual)
    textoPantalla+=cual.target.innerHTML
    actualizaPantalla(textoPantalla)
    desactivaOperadores()
    
}
function activaOperadores(){
    botonesOperadores.forEach(boton=>{
        //Para activar un boton le cambiamos el cursor
        boton.style.cursor='pointer'
        //y le añadimos el listener del click
        boton.addEventListener('click', operadorClicado)
    })


}
function yaHaySigno(){
    let comprobacion
    //indexOf nos vale para buscar en strings,
    //si no encuentra lo que buscamos, devuelve -1
    //si lo encuentra, devuelve la posición en que está
    //En este caso, si todos devuelven -1 es que no hay ningún signo en textoPantalla
    if(textoPantalla.indexOf('+')==-1 && textoPantalla.indexOf('-')==-1 && textoPantalla.indexOf('*')==-1 && textoPantalla.indexOf('/')==-1){
        comprobacion=false
    }else{
        comprobacion=true
    }
    return comprobacion 
}
function actualizaPantalla(texto){
    pantalla.innerHTML=texto
}
function numeroClicado(e){
    //Si es el primer click, hay que borrar el cero y escribir el numero clicado
    if(textoPantalla=='0'){
        textoPantalla=e.target.innerHTML
    }else{
        //Si no hay un cero, lo que tenemos que hacer es añadir el clicado a lo que ya esté ahí
        textoPantalla+=e.target.innerHTML
    }
    //Comprobamos que los operadores estén desactivados
    if(!operadoresActivados){
        //Y que no se hayan usado antes, si fuera así ya habría uno en textoPantalla
        //y eso es lo que comprueba esta función que simplemente devuelve true/false según el caso
        if(yaHaySigno()){
            console.log('Ya hemos incluído un sigo, vamos a pasar...')
        }else{
            activaOperadores()
            operadoresActivados=true
            console.log('Activamos los operadores!')
        }
    }
    
    actualizaPantalla(textoPantalla)
}
function activaBoton(boton){
    //Para activar un boton le cambiamos el cursor
    boton.style.cursor='pointer'
    //y le añadimos el listener del click
    boton.addEventListener('click', numeroClicado)
}
function encenderCalculadora(){
    pantalla.innerHTML=textoPantalla
    btnEncendido.style.cursor='default'
    //El botón de encendido ya se puede desactivar
    btnEncendido.removeEventListener('click', encenderCalculadora)
    //Recorremos el 'array' con todos los botones numéricos, se los pasamos a una función que los active
    botonesNumeros.forEach(boton=>{
        activaBoton(boton)
    })
}

//Función que se ejecuta al arrancar nuestra aplicación
function initCalculadora(){
    btnEncendido.style.cursor = 'pointer'
    /*En el listener, ponemos una función con nombre por que eso nos permite
    activar y desactivar los listeners de forma más sencilla */
    btnEncendido.addEventListener('click', encenderCalculadora)
}
initCalculadora()