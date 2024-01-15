const miData = [
    {
        "ciudad":"Donostia",
        "temperatura":14,
        "estado":5,
        "termometro":2
    },
    {
        "ciudad":"Burgos",
        "temperatura":-5,
        "estado":8,
        "termometro":1
    },
    {
        "ciudad":"Miami",
        "temperatura":35,
        "estado":1,
        "termometro":3
    },
]
/* Guardamos en variables todos los elementos del interface
que vamos a estar modificando. Todo lo que se vaya a modificar 
más de una vez es mejor tenerlo en variables para evitar excesivos querySelectors */
let contenedor = document.querySelector('#container')
let estado = document.querySelector('#estado img')
let termometro = document.querySelector('#termometro img')
let temperatura = document.querySelector('#temperatura')
let nombre = document.querySelector('#nombre-ciudad')
let miSelect = document.querySelector('select')

//Empezamos a escuchar el evento change del selector
miSelect.addEventListener('change', ()=>{
    miData.forEach(ciudad=>{
        //Y recorremos el array con la info para buscar si hay alguna igual a la que ha elegido el usuario
        //Utilizamos toLowerCase() para pasar a minúsculas todo
        //Ya que en el array, los nombres contienen mayúsculas y en el value del select no
        if(ciudad.ciudad.toLocaleLowerCase()==miSelect.value){
            //Si hay alguna coincidencia, empezamos a modificar valores de los elemento de pantalla
            //los backticks nos permiten utilizar variables dentro de strings
            //`Este es un string donde podemos insertar una ${variable} :)`
            estado.src=`./img/iconos/${ciudad.estado}.png`
            termometro.src=`./img/iconos/termometro-${ciudad.termometro}.png`
            contenedor.style.backgroundImage = `url(./img/${ciudad.ciudad.toLocaleLowerCase()}.webp)`
            //Este elemento estaba inicialmente oculto, lo ponemos visible antes de darle valor
            nombre.style.display='flex'
            nombre.innerHTML=ciudad.ciudad
            //Ídem al elemento anterior
            temperatura.style.display='flex'
            temperatura.innerHTML=ciudad.temperatura+'º'
        }
    })
})

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    //Creamos el nuevo option a añadir al select
    let nueva = document.createElement("option");
    nueva.text = document.querySelector('#campo_ciudad').value;
    nueva.value=document.querySelector('#campo_ciudad').value.toLocaleLowerCase()
    miSelect.add(nueva);
    //Creamos el nuevo objeto a añadir al array con la info
    let nuevaCiudad = {
        "ciudad":document.querySelector('#campo_ciudad').value,
        "temperatura":parseInt(document.querySelector('#campo_temperatura').value),
        "estado":parseInt(document.querySelector('#campo_estado').value),
        "termometro":parseInt(document.querySelector('#campo_termometro').value)
    }
    miData.push(nuevaCiudad)
    console.log(miData)
})