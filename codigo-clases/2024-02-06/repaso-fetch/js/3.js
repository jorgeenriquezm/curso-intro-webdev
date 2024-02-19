const contenedor = document.querySelector('main')

fetch('https://swapi.dev/api/people/1/')
.then(data=>data.json())
.then(convertida=>{
    //Creamos un elemento padre que englobará toda la información
    let ficha = document.createElement('article')
    ficha.classList.add('ficha')
    //Creamos un hijo, le damos una clase y le damos contenido
    let nombre = document.createElement('p')
    nombre.classList.add('nombre')
    nombre.innerHTML=`Name: ${convertida.name}`
    //Creamos un hijo, le damos una clase y le damos contenido
    let altura = document.createElement('p')
    altura.classList.add('altura')
    altura.innerHTML=`Height: ${convertida.height}`
    //Creamos un hijo, le damos una clase y le damos contenido
    let anio = document.createElement('p')
    anio.classList.add('anio')
    anio.innerHTML=`Birth year: ${convertida.birth_year}`
    //Al elemento padre (ficha), le añadimos los tres hijos que hemos creado
    ficha.appendChild(nombre)
    ficha.appendChild(altura)
    ficha.appendChild(anio)
    //Y ese elemento padre se lo añadimos al contenedor que engloba todas las fichas y ya tenemos creado en nuestro .html
    contenedor.appendChild(ficha)
})
.catch(error => new Error(error))