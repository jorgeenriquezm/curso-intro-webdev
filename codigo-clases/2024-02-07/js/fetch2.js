const contenedor = document.querySelector('main')
function cargaPersonaje(cual, donde){
    const columna = contenedor.querySelector(`div.columna:nth-child(${donde})`)
    columna.innerHTML=''
            console.log(cual)
            const ficha = document.createElement('div')
            ficha.classList.add('ficha')

            const nombre = document.createElement('p')
            nombre.classList.add('nombre')
            nombre.classList.add('puntero')
            nombre.innerHTML=`<span>Nombre: </span>${cual.name}`

            const altura = document.createElement('p')
            altura.classList.add('altura')
            altura.classList.add('puntero')
            altura.innerHTML=`<span>Altura: </span>${cual.height}`

            const gender = document.createElement('p')
            gender.classList.add('gender')
            gender.classList.add('puntero')
            gender.innerHTML=`<span>Género: </span>${cual.gender}`

            ficha.appendChild(nombre)
            ficha.appendChild(altura)
            ficha.appendChild(gender)
            columna.appendChild(ficha)

}
function cargaPelicula(cual, donde){
    const columna = contenedor.querySelector(`div.columna:nth-child(${donde})`)
    cual.characters.forEach(personaje=>{
        fetch(personaje)
        .then(data=>data.json())
        .then(info=>{
            console.log(info)
            const ficha = document.createElement('div')
            ficha.classList.add('ficha')

            const nombre = document.createElement('p')
            nombre.classList.add('nombre')
            nombre.classList.add('puntero')
            nombre.innerHTML=info.name
            nombre.addEventListener('click', ()=>{
                cargaPersonaje(info, 3)
            })
            ficha.appendChild(nombre)
            columna.appendChild(ficha)

        })
    })
}
function renderizaPelicula(pelicula){
    const columna = contenedor.querySelector('div.columna:nth-child(1)')
    columna.innerHTML=''
    const ficha = document.createElement('div')
    ficha.classList.add('ficha')

    const titulo = document.createElement('p')
    titulo.classList.add('titulo')
    titulo.classList.add('puntero')
    titulo.innerHTML=pelicula.title
    titulo.addEventListener('click', ()=>{
        cargaPelicula(pelicula, 2)
    })
    ficha.appendChild(titulo)
    columna.appendChild(ficha)
}

fetch('https://swapi.dev/api/films')
.then(data=>data.json())
.then(info=>{
    info.results.forEach(pelicula=>{
        renderizaPelicula(pelicula)
    })
})
.catch(error=>console.log(error))