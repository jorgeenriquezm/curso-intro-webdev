const contenedor = document.querySelector('main')

function renderizaPersonaje(info){
    //console.log(info)
    let ficha = document.createElement('article')
    ficha.classList.add('ficha')
    ficha.classList.add('ficha-columnas')

    let izquierda = document.createElement('div')
    ficha.appendChild(izquierda)

    let imagen = document.createElement('img')
    imagen.src = '/img/random.png'
    izquierda.appendChild(imagen)


    let derecha = document.createElement('div')
    ficha.appendChild(derecha)    


    let nombre = document.createElement('p')
    nombre.classList.add('nombre')
    nombre.innerHTML=`Name: ${info.name}`


    let altura = document.createElement('p')
    altura.classList.add('altura')
    altura.innerHTML=`Height: ${info.height}`

    let anio = document.createElement('p')
    anio.classList.add('anio')
    anio.innerHTML=`Birth year: ${info.birth_year}`

    derecha.appendChild(nombre)
    derecha.appendChild(altura)
    derecha.appendChild(anio)
    contenedor.appendChild(ficha)
}


fetch('https://swapi.dev/api/films/1/')
.then(data=>data.json())
.then(convertida=>{
       convertida.characters.forEach(personaje => {
        fetch(personaje)
        .then(info=>info.json())
        .then(informacion=>renderizaPersonaje(informacion))
        .catch(error=>new Error(error))
    })
})
.catch(error => new Error(error))