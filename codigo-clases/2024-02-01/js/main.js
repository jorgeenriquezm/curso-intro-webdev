//fetch nos vale para pedir información a un servidor
fetch('https://swapi.dev/api/films') //fetch devuelve una promesa
.then(data=>data.json()) //convertimos a json lo que nos devuelve
.then(procesada=>{
    procesada.results.forEach(pelicula => {
       let parrafo = document.createElement('p')
       parrafo.innerHTML=`<p>${pelicula.title}</p>`
       document.querySelector('#contenedor').appendChild(parrafo)
    });
})
.catch(error=>console.log(error)) //Si algo ha fallado, se ejecuta esto