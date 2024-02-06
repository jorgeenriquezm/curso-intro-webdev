fetch('https://swapi.dev/api/people/1/')
.then(data=>data.json())
.then(convertida=>console.log(convertida))
.catch(error => new Error(error))