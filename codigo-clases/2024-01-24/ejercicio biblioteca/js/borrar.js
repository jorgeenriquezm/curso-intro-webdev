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
function sacaTooltip(mensaje, esError=0){
    //Creamos un elemento padre, le agregamos un texto que recibimos por parámetro
    //lo añadimos al body y lo quitamos después de 3 segundos
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    if(esError==1){
        //Le añadimos otra clase para darle color rojo (error)
        tooltip.classList.add('tooltip-error')
    }

    let texto = document.createElement('p')
    texto.innerHTML=mensaje
    tooltip.appendChild(texto)
    document.querySelector('body').appendChild(tooltip)

    setTimeout(()=>{
        tooltip.remove()
    }, 3000)
}
//Este es el submit del formulario, primero, como siempre, preventDefault()
document.querySelector('#formulario-borrar').addEventListener('submit', (e)=>{
    e.preventDefault()
    //Cogemos el sku que ha escrito el usuario
    let sku = document.querySelector('#sku').value
    //Y recorremos el array de libros en búsqueda de ese SKU
    //(por ahora no hemos comtemplado que sea único)
    //Usamos swEncontrado para comprobar si ha aparecido alguno con ese SKU o no,
    //Si no aparece ninguno, sacaremos un mensaje de error
    let swEncontrado=0
    let contador = 0
    let encontrado = 0
    libros.forEach(libro=>{
        //Si coincide lo que ha escrito el usuario con el sku de esta vuelta del bucle...
        if(sku==libro.sku){
            swEncontrado=1
            encontrado = contador
            console.log('Toca borrar el libro '+encontrado)
            let seleccionado = document.querySelector('#seleccionado')
            //Repetimos el proceso del listado, creo elemento, doy contenido, añado a su padre...
            let padre = document.createElement('div')
            padre.classList.add('listado-libro')
            let titulo = document.createElement('p')
            titulo.innerHTML = libro.titulo
            padre.appendChild(titulo)
            let autor = document.createElement('p')
            autor.innerHTML = libro.autor
            padre.appendChild(autor)
            
                let boton = document.createElement('button')
                boton.innerHTML="BORRAR"
                padre.append(boton)
                boton.addEventListener('click', ()=>{
                    console.log('Toca borrar el libro')
                    //Borramos el elemento del array
                    libros.splice(encontrado, 1)
                    sacaTooltip('Libro borrado con éxito.')
                    //Y guardamos en localStorage
                    localStorage.setItem('biblioteca_libros', JSON.stringify(libros))
                    //Borramos el contenido del donde habíamos sacado el libro
                    seleccionado.innerHTML=''
                    //Reseteamos el formulario
                    document.querySelector('#formulario-borrar').reset()
                })
            
            seleccionado.appendChild(padre)
        }
        contador++
    })
    //Esto quiere decir que no se ha encontrado ninguna coincidencia
    if(swEncontrado==0){
        sacaTooltip('No se ha encontrado ningún libro con ese SKU.', 1)
    }
})