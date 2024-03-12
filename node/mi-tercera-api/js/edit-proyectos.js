const contenedor = document.querySelector('main')

fetch('http://localhost:3000/proyectos')
.then(respuesta=>respuesta.json())
.then(parseada=>{
    parseada.forEach(element => {
        let ficha = document.createElement('article')
        ficha.classList.add('ficha')

        let contenedorImagen = document.createElement('div')
        contenedorImagen.classList.add('img-container')
        ficha.appendChild(contenedorImagen)

        let imagen = document.createElement('img')
        imagen.classList.add('imagen')
        imagen.src = element.imagen
        contenedorImagen.appendChild(imagen)

        let titulo = document.createElement('h2')
        titulo.classList.add('titulo')
        titulo.innerHTML=element.titulo
        ficha.appendChild(titulo)

        /* let descripcion = document.createElement('p')
        descripcion.classList.add('descripcion')
        descripcion.innerHTML=element.descripcion
        ficha.appendChild(descripcion) */

        let inputOculto = document.createElement('input')
        inputOculto.setAttribute('type', 'hidden')
        inputOculto.setAttribute('id', 'oculto'+element.id)
        inputOculto.setAttribute('value', element.id)

        let botonEdit = document.createElement('button')
        botonEdit.classList.add('btn-editar')
        botonEdit.innerText = "EDITAR"
        botonEdit.addEventListener('click', (e)=>{
            console.log(`Nos toca modificar el proyecto ${inputOculto.value}`)
            formularioEditarProyecto.classList.remove('oculto')
        })
        ficha.appendChild(botonEdit)


        let formularioEditarProyecto = document.createElement('div')
        formularioEditarProyecto.classList.add('formulario-editar-proyecto')
        formularioEditarProyecto.classList.add('oculto')

        ficha.appendChild(formularioEditarProyecto)


        contenedor.appendChild(ficha)
    });
})