/*
Este primer bloque es el código necesario para que funcione el menú que he hecho.
Por ahora, como no hemos visto módulos, habría que escribirlo en todos los js que cree,
esto nos servirá más adelante para que sea un ejemplo real de la importancia de los módulos
*/
let botonMenu = document.querySelector('#menuIcon')
let botonCerrarMenu = document.querySelector('#btnCerrarMenu')
let menu = document.querySelector('#menu')
botonMenu.addEventListener('click', (e)=>{
    botonMenu.style.display='none'
    menu.style.display='block'
})
botonCerrarMenu.addEventListener('click', (e)=>{
    botonMenu.style.display='block'
    menu.style.display='none'
})
//Aquí empezamos el código exclusivo de este apartado
//Lo primero que hacemos es crear el array donde tendremos todos los libros
let libros = []
//Y luego comprobamos si ya tenemos info guardada en localStorage
if(localStorage.getItem('biblioteca_libros')!=null){
    //Si la tenemos, la cargamos, parseamos y pasamos al array creado al inicio
    libros = JSON.parse(localStorage.getItem('biblioteca_libros'))
}
//Este botón es el submit del formulario, primero le hacemos el preventDefault()
//Después creamos el nuevo objeto, le damos valor a sus propiedades con los values del formulario
let btnGuardar = document.querySelector('#formulario-guardar')
//Escuchamos el submit del form ya que el click de botón no hace la validación
function sacaTooltip(mensaje){
    //Creamos un elemento padre, le agregamos un texto que recibimos por parámetro
    //lo añadimos al body y lo quitamos después de 3 segundos
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')

    let texto = document.createElement('p')
    texto.innerHTML=mensaje
    tooltip.appendChild(texto)
    document.querySelector('body').appendChild(tooltip)

    setTimeout(()=>{
        tooltip.remove()
    }, 3000)
}
btnGuardar.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let libro = {}
    libro.sku = document.querySelector('#sku').value
    libro.titulo = document.querySelector('#titulo').value
    libro.autor = document.querySelector('#autor').value
    libro.anio = parseInt(document.querySelector('#anio').value)
    libro.reservado = parseInt(document.querySelector('#reservado').value)
    //Y lo añadimos al array de libros
    libros.push(libro)
    //Y también al localStorage para que ambos sean iguales
    localStorage.setItem('biblioteca_libros', JSON.stringify(libros))
    //Sacamos un tooltip creado por nosotros
    sacaTooltip('Libro guardado correctamente')
    //Y reseteamos el formulario para evitar un segundo submit
    btnGuardar.reset()
})
