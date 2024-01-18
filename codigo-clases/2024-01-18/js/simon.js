//Creamos este array para guardar los colores que posteriormente guardaremos en localStorage.
//De esta forma podremos guardar más de un valor, no simplemente el último botón en el que hayamos clicado.
let colores = []
//Comprobamos si hay contenido de sesiones previas y de ser así, lo cargamos y pasamos al array
if(localStorage.getItem('lista-de-colores')!=null){
    colores = JSON.parse(localStorage.getItem('lista-de-colores'))
}
//Los 4 botones los vamos a usar varias veces, para los clicks y para encender/apagar, pues mejor
//meterlos en variables para evitar queries innecesarios.
const botonAmarillo = document.querySelector('#amarillo')
const botonAzul = document.querySelector('#azul')
const botonRojo = document.querySelector('#rojo')
const botonVerde = document.querySelector('#verde')
function apagaPulsadores(){
    const pulsadores = document.querySelectorAll('.pulsador')
    pulsadores.forEach(pulsador=>{
        pulsador.style.opacity=0.5
    })
}
function enciendePulsador(cual){
    //Antes de encender el pulsador correspondiente, apagamos todos para
    //asegurarnos de que el anterior/es no se queda encendido
    apagaPulsadores()
    //Una vez apagados todos, encendemos el que correponda
    if(cual=="rojo"){
        botonRojo.style.opacity=1
    }else if(cual=="verde"){
        botonVerde.style.opacity=1
    }else if(cual=="azul"){
        botonAzul.style.opacity=1
    }else if(cual=="amarillo"){
        botonAmarillo.style.opacity=1
    }
}
//Cada uno de los pulsadores llama a esta función pasándole cuál es, lo añadimos al array
//y guardamos en localStorage para que esté actualizado
function guardaColor(color){
    colores.push(color)
    localStorage.setItem('lista-de-colores', JSON.stringify(colores))
    console.log(colores)
}

botonAmarillo.addEventListener('click', ()=>{
    guardaColor('amarillo')
})
botonAzul.addEventListener('click', ()=>{
    guardaColor('azul')
})
botonRojo.addEventListener('click', ()=>{
    guardaColor('rojo')
})
botonVerde.addEventListener('click', ()=>{
    guardaColor('verde')
})

document.querySelector('#reset').addEventListener('click', ()=>{
    //con removeItem podemos borrar un elemento del localStorage
    //con clear borramos todos
    localStorage.removeItem('lista-de-colores')
    //Igualamos el array de colores a uno vacío para "borrar" sus elementos
    colores=[]
})

document.querySelector('#replay').addEventListener('click', ()=>{
    //Tenemos que ejecutar el intervalo tantas veces como elementos tenga el array de colores
    //Para saber cuando llegamos al límite, utilizamos un contador. Sería mejor hacerlo con map() pero aún no lo hemos visto
    let contador = 0
    //Creamos el setInterval y lo guardamos en una variable para posteriormente poder pararlo
    let intervalo = setInterval(()=>{
        //Nos aseguramos de que estamos en un índice dentro del array
        if(contador<colores.length){
            enciendePulsador(colores[contador])
            contador++
        }else{
            //Si hemos llegado al último item del array, detenemos el intervalo y reseteamos el contador
            apagaPulsadores()
            clearInterval(intervalo)
            contador=0
        }
    },1000)
})