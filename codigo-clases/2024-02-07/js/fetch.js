 //Este es el contenedor donde vamos a renderizar todas las fichas
 const contenedor = document.querySelector('main')

//Hacemos el fetch para recibir la info de la película 1
fetch('https://swapi.dev/api/films/1')
.then(informacion => informacion.json())
.then(convertida=>{
    //Una vez recibida, cogemos los personajes (en characters) y recorremos ese array
    convertida.characters.forEach(personaje=>{
        //Por cada personaje, hacemos un fetch para recibir su info
        fetch(personaje)
        .then(informacion=>informacion.json())
        .then(convertida=>{
            //Cuando recibimos la info de cada personaje, hacemos el proceso de crear la ficha, sus hijos
            //y añadirle el contenido que le corresponde
            //Yo preferifía sacar esta funcionalidad a renderizaPersonaje(convertida), pero como lo veis más claro aquí, aquí se queda
            //Creamos la ficha
            let ficha = document.createElement('article')
            //le añadimos una clase para posteriormente darle estilos
            ficha.classList.add('ficha')
            //La ficha es grid y tiene dos columnas, izquierda y derecha. Las creamos
            let izquierda = document.createElement('div')
            izquierda.classList.add('izquierda')
            ficha.appendChild(izquierda)
            let imagen = document.createElement('img')
            imagen.src='https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png'
            izquierda.appendChild(imagen)
            //
            let derecha = document.createElement('div')
            derecha.classList.add('derecha')
            ficha.appendChild(derecha)
            //La columna derecha tiene 3 campos que mostrar, name, height y birth_year. Creamos un p para cada uno, le damos contenido y lo añadimos
            let nombre = document.createElement('p')
            nombre.classList.add('nombre')
            nombre.innerHTML = '<span>Nombre:</span> '+convertida.name
            derecha.appendChild(nombre)
            //
            let altura = document.createElement('p')
            altura.classList.add('altura')
            altura.innerHTML = '<span>Altura: </span>'+convertida.height
            derecha.appendChild(altura)
            //
            let anio = document.createElement('p')
            anio.classList.add('anio')
            anio.innerHTML = '<span>Nacimiento: </span>'+convertida.birth_year
            derecha.appendChild(anio)
            //Con la ficha completa ya creada, la añadimos al contenedor global
            contenedor.appendChild(ficha)
        })
    })
    .catch(error=>console.log(error))  
})
.catch(error=>console.log(error))
