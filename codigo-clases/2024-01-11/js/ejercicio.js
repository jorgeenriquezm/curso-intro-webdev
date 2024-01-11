/* Guardamos el tiempo que nos queda por jugar ya que lo
vamos a utilizar en varios sitios */
let tiempoRestante=60
/*Guardamos también el div donde tenemos que escribir
el tiempo restante ya que lo vamos a utilizar en cada
ejecución del setInterval */
const marcadorTiempo = document.querySelector('#tiempo')
//Escribimos en ese div el valor de la variable
marcadorTiempo.innerHTML=tiempoRestante

//Creamos una variable donde vamos a guardar la puntuación
let puntos=0
//Y guardamos el div donde vamos a escribir esa puntuación
let marcadorPuntos = document.querySelector('#puntos')
//Guardamos en una variable el elemento que va a recibir los clicks
const circulo = document.querySelector('#circulo')
//Y le añadimos el listener para responder a esos clicks
circulo.addEventListener('click', sumaPunto)
function sumaPunto(){
    //Sumamos a la variable que guarda la puntuación
    puntos++
    //Y lo escribimos en el div correspondiente
    marcadorPuntos.innerHTML=puntos
    /*Como bonus, vamos a hacer que también cambie de posición
    con cada click, y para eso creamos una función que va a generar
    esas posiciones y que nos las devuelve en un array */
    const nuevaPosicion = generaPosicionAleatoria()
    /* Como el círculo está posicionado con position:absolute, podemos
    usar estos números que nos devuelve la función para darle el top
    y el left que nos genera la función */
    circulo.style.left = nuevaPosicion[0]+'px'
    circulo.style.top = nuevaPosicion[1]+'px'
}
function generaPosicionAleatoria(){
    /* Generamos números entre 25 y 475 tanto para X como para Y */
    const posX = Math.round(Math.random()*400)+50
    const posY = Math.round(Math.random()*400)+50
    /* Los devolvemos en un array con los dos elementos, ya que
    una función solo puede tener un único return, así que tenemos
    que usar un array o un objeto para devolver múltiples valores */
    return [posX, posY]
}

//Creamos un intervalo que se ejecutará cada segundo
let intervalo = setInterval(()=>{
    //Como ha pasado un segundo, le restamos al tiempo que nos queda
    tiempoRestante--
    //Y reflejamos ese nuevo valor en el marcador que estamos usando
    marcadorTiempo.innerHTML=tiempoRestante
    /* Tenemos que comprobar que si llega a cero
    deje de restar tiempo y se detenga todo */
    if(tiempoRestante==0){
        //Paramos el intervalo creado arriba para que no siga restando
        clearInterval(intervalo)
        /*También tenemos que hacer que el circulo ya no sea clicable
        y para ello lo que hacemos es quitarle el listener*/
        circulo.removeEventListener('click', sumaPunto)
        //Y también ocultamos el círculo para dejar claro que se ha acabado el juego
        circulo.style.display = 'none'
        // Y sacamos un boton que teníamos oculto en el html
        const boton = document.querySelector('button')
        boton.style.display='block'
        /* Le añadimos un listener para que al hacer click, nos refresque la ventana
        y empiece una partida nueva */
        boton.addEventListener('click', ()=>{
            location.reload()
        })
    }
}, 1000)