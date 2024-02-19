let contenedor = document.querySelector('#user')

function renderizaUsuario(usuario){
    console.log(usuario)
    let ficha = document.createElement('div')
    ficha.classList.add('ficha')

    let arriba = document.createElement('div')
    arriba.classList.add('arriba')
    ficha.appendChild(arriba)

    let imagenThm = document.createElement('div')
    imagenThm.classList.add('userImg')

    let imagen = document.createElement('img')
    imagen.src = usuario.picture.large

    imagenThm.appendChild(imagen)
    arriba.appendChild(imagenThm)

    let abajo = document.createElement('div')
    abajo.classList.add('abajo')

    let preNombre = document.createElement('p')
    preNombre.classList.add('preNombre')
    preNombre.innerHTML='Hi, my name is'
    abajo.appendChild(preNombre)

    let nombre = document.createElement('p')
    nombre.innerHTML = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}.`
    abajo.appendChild(nombre)

    ficha.appendChild(abajo)
    contenedor.appendChild(ficha)
}
fetch('https://randomuser.me/api/')
//Recibimos la respuesta de la promise y la convertimos a json para poder trabajar con la información que nos interesa
.then(data=>data.json()) 
//Una vez convertida, la recibimos en el segundo then() y la procesamos según nos interesa
.then(procesada=>{renderizaUsuario(procesada.results[0])})
.catch(error=>new Error(error)) //Si algo ha fallado, se ejecuta esto