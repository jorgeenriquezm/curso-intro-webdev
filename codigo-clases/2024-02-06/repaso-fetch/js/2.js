fetch('https://swapi.dev/api/people/1/')
.then(data=>data.json())
.then(info=>{
    document.write(`<p>Name: ${info.name}</p>
                    <p>Height: ${info.height}</p>
                    <p>Birth year: ${info.birth_year}</p>`)
})
.catch(error => new Error(error))