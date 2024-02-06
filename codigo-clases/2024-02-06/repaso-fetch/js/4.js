const contenedor = document.querySelector('main')

fetch('https://swapi.dev/api/people/1/')
.then(data=>data.json())
.then(convertida=>{
    console.log(convertida)
    let ficha = document.createElement('article')
    ficha.classList.add('ficha')
    ficha.classList.add('ficha-columnas')

    let izquierda = document.createElement('div')
    ficha.appendChild(izquierda)

    let imagen = document.createElement('img')
    imagen.src = '/img/luke.jpg'
    izquierda.appendChild(imagen)


    let derecha = document.createElement('div')
    ficha.appendChild(derecha)    


    let nombre = document.createElement('p')
    nombre.classList.add('nombre')
    nombre.innerHTML=`Name: ${convertida.name}`


    let altura = document.createElement('p')
    altura.classList.add('altura')
    altura.innerHTML=`Height: ${convertida.height}`

    let anio = document.createElement('p')
    anio.classList.add('anio')
    anio.innerHTML=`Birth year: ${convertida.birth_year}`

    derecha.appendChild(nombre)
    derecha.appendChild(altura)
    derecha.appendChild(anio)
    contenedor.appendChild(ficha)
})
.catch(error => new Error(error))