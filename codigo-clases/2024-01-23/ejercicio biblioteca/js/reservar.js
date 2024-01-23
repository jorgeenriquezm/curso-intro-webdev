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
//Fin del código del menú
//Inicio del código exclusivo de este apartado
//Creamos el array que contendrá todos los libros
let libros=[]
//Si tenemos guardado en localStorage lo cargamos y guardamos en el array
if(localStorage.getItem('biblioteca_libros')==null){
    alert('No hay libros guardados. Vete al apartado de añadir libros y guarda alguno.')
}else{
    libros = JSON.parse(localStorage.getItem('biblioteca_libros'))
}
//Este es el submit del formulario, primero, como siempre, preventDefault()
document.querySelector('#btnBuscar').addEventListener('click', (e)=>{
    e.preventDefault()
    //Cogemos el sku que ha escrito el usuario
    let sku = document.querySelector('#sku').value
    //Y recorremos el array de libros en búsqueda de ese SKU
    //(por ahora no hemos comtemplado que sea único)
    libros.forEach(libro=>{
        //Si coincide lo que ha escrito el usuario con el sku de esta vuelta del bucle...
        if(sku==libro.sku){
            let seleccionado = document.querySelector('#seleccionado')
            //Repetimos el proceso del listado, creo elemento, doy contenido, añado a su padre...
            let padre = document.createElement('div')
            let titulo = document.createElement('p')
            titulo.innerHTML = libro.titulo
            padre.appendChild(titulo)
            let autor = document.createElement('p')
            autor.innerHTML = libro.autor
            padre.appendChild(autor)
            //Si el libro NO está reservado, mostraremos un botón para poder hacerlo
            if(libro.reservado==0){
                let boton = document.createElement('button')
                boton.innerHTML="RESERVAR"
                padre.append(boton)
                boton.addEventListener('click', ()=>{
                    //Simplemente cambiándole esa propiedad de ese libro a 1 (SI reservado)
                    libro.reservado=1
                    //Y guardamos en localStorage
                    localStorage.setItem('biblioteca_libros', JSON.stringify(libros))
                })
            }
            seleccionado.appendChild(padre)
        }
    })
})