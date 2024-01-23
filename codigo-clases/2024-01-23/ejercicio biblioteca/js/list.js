//Código para el menú
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
//Fin del código para el menú
//Inicio del código exclusivo de este apartado
//Todos los libros que tengamos los vamos a renderizar en este elemento, inicialmente vacío en el .html
let contenedor = document.querySelector('#contenedor-libros')
//Nos creamos el array donde tendremos todos los libros
let libros=[]
//Y acto seguido miramos a ver si hay info en localStorage para cargarla
if(localStorage.getItem('biblioteca_libros')==null){
    alert('No hay libros guardados. Vete al apartado de añadir libros y guarda alguno.')
}else{
    //Si tenemos libros guardados, los cargamos y pasamos al array
    libros = JSON.parse(localStorage.getItem('biblioteca_libros'))
    //Empezamos a recorrer ese array, y por cada libro que tengamos
    libros.forEach(libro => {
        //Creamos un "padre" que va a englobar toda la info del libro
        let padre = document.createElement('div')
        //le añadimos una clase simplemente para darle algunos estilos
        padre.classList.add('listado-libro')
        //Creamos un elemento
        let titulo = document.createElement('p')
        titulo.classList.add('dato')
        //Le damos contenido
        titulo.innerHTML=libro.titulo
        //Creamos un elemento
        let sku = document.createElement('p')
        sku.classList.add('dato')
        //Le damos contenido
        sku.innerHTML=libro.sku
        //Creamos un elemento
        let autor = document.createElement('p')
        autor.classList.add('dato')
        //Le damos contenido
        autor.innerHTML=libro.autor
        //Creamos un elemento
        let anio = document.createElement('p')
        anio.classList.add('dato')
        //Le damos contenido
        anio.innerHTML=libro.anio

        //Los cuatro elementos creados, los añadimos al padre
        padre.appendChild(titulo)
        padre.appendChild(sku)
        padre.appendChild(autor)
        padre.appendChild(anio)
        //Estra comprobación de abajo simplemente es para añadirle una clase u otra según su estado de reserva
        //Simplemente le da un color verde o rojo según ese estado
        if(libro.reservado==1){
            padre.classList.add('reservado')
        }else{
            padre.classList.add('no-reservado')
        }
        //Y el "padre" que contiene toda la info, se la añadimos al contenedor que tiene todos los libros
        contenedor.appendChild(padre)
    });
}
