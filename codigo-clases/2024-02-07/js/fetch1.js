fetch('https://swapi.dev/api/films')
.then(data=>data.json())
.then(info=>{
    info.results.forEach(pelicula=>{
        pelicula.characters.forEach(personaje=>{
            console.log(personaje)
            fetch(personaje)
            .then(data=>data.json())
            .then(info=>console.log(info))
            .catch(error=>new Error(error))
        })
    })
})
.catch(error=>console.log(error))