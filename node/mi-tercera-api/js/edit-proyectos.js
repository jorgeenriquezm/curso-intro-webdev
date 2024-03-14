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

        //Añadimos un input oculto con el id del item que estamos viendo
        //para poder enviar luego al endpoing si el usuario decide actualizar
        let inputOculto = document.createElement('input')
        inputOculto.setAttribute('type', 'hidden')
        inputOculto.setAttribute('id', 'oculto'+element.id)
        inputOculto.setAttribute('value', element.id)



        //Añadimos el botón que mostrará el formulario
        let botonDelete = document.createElement('button')
        botonDelete.classList.add('btn-editar')
        botonDelete.innerText = "BORRAR"
        botonDelete.addEventListener('click', (e)=>{     
            try {
                fetch("http://localhost:3000/proyectos/delete", {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({id:inputOculto.value}),
                })
                .then(response=>{
                    if(response.status===200){
                        location.reload()
                    }
                })
              } catch (error) {
                console.error("Error:", error);
              }





        })
        ficha.appendChild(botonDelete)





        //Añadimos el botón que mostrará el formulario
        let botonEdit = document.createElement('button')
        botonEdit.classList.add('btn-editar')
        botonEdit.innerText = "EDITAR"
        botonEdit.addEventListener('click', (e)=>{
            console.log(`Nos toca modificar el proyecto ${inputOculto.value}`)
            formularioEditarProyecto.classList.remove('oculto')
        })
        ficha.appendChild(botonEdit)



        













        //Y creamos el formulario
        let formularioEditarProyecto = document.createElement('form')
        formularioEditarProyecto.classList.add('formulario-editar-proyecto')
        formularioEditarProyecto.classList.add('oculto')
        //Con sus inputs, dándoles maxlength y un valor por defecto
        //que es el que ya tienen en la BBDD
        let campoTitulo = document.createElement('input')
        campoTitulo.setAttribute('maxlength', 50)
        campoTitulo.setAttribute('value', element.titulo)
        formularioEditarProyecto.appendChild(campoTitulo)

        let campoImagen = document.createElement('input')
        campoImagen.setAttribute('maxlength', 255)
        campoImagen.setAttribute('value', element.imagen)
        formularioEditarProyecto.appendChild(campoImagen)

        let campoDescripcion = document.createElement('input')
        campoDescripcion.setAttribute('maxlength', 255)
        campoDescripcion.setAttribute('value', element.descripcion)
        formularioEditarProyecto.appendChild(campoDescripcion)

        let campoFecha = document.createElement('input')
        campoFecha.setAttribute('value', element.fecha)
        formularioEditarProyecto.appendChild(campoFecha)

        let campoLink = document.createElement('input')
        campoLink.setAttribute('maxlength', 255)
        campoLink.setAttribute('value', element.link)
        formularioEditarProyecto.appendChild(campoLink)
        //Creamos también el botón que hará el submit de todo
        let botonSubmit = document.createElement('input')
        botonSubmit.setAttribute('type', "submit")
        botonSubmit.setAttribute('value', "ACTUALIZAR")
        formularioEditarProyecto.appendChild(botonSubmit)       
        botonSubmit.addEventListener('click', (e)=>{
            alert(`Enviado la información del proyecto ${element.id}`)
            formularioEditarProyecto.classList.add('oculto')
        })

















        //Y creamos también un botón para poder cerrar el form sin tener que actualizar
        let botonCerrar = document.createElement('img')
        botonCerrar.classList.add('boton-cerrar')
        botonCerrar.src='https://cdn-icons-png.freepik.com/256/1828/1828843.png'
        formularioEditarProyecto.appendChild(botonCerrar)       
        botonCerrar.addEventListener('click', (e)=>{
            formularioEditarProyecto.classList.add('oculto')
        })

        ficha.appendChild(formularioEditarProyecto)
        contenedor.appendChild(ficha)
    });
})