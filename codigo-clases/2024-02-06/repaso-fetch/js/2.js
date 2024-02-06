fetch('https://swapi.dev/api/people/1/')
.then(data=>data.json())
.then(convertida=>{
    console.log(convertida)
    document.write(`<p>Name: ${convertida.name}</p>`)
    document.write(`<p>Height: ${convertida.height}</p>`)
    document.write(`<p>Birth year: ${convertida.birth_year}</p>`)
})
.catch(error => new Error(error))