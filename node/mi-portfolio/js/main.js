//Hacemos un fetch normal, recibimos, parseamos y sacamos por consola
const respuesta = fetch('http://localhost:3000/usuarios')
.then(data=>data.json())
.then(parseada=>{
    console.log(parseada)
    parseada.forEach(usuario => {
        document.write(`<p>${usuario.nombre}</p>`)
    });
})
.catch(error=>console.log(error))