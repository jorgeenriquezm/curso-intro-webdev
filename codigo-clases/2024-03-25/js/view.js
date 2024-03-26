let alumnos = []
const contenedor = document.querySelector('main')
function borraAlumno(cual){
    console.log(alumnos)
    alumnos = alumnos.filter(alumno => alumno.dni != cual)
    console.log(alumnos)
    localStorage.setItem('examen_alumnos', JSON.stringify(alumnos))
    location.reload()
}
function noHayAlumnos(){
    alert('No hay alumnos que mostrar...')
    document.write('<a href="add.html"><i class="fa-solid fa-user-plus"></i></a></a>')
}
if(localStorage.getItem('examen_alumnos')){
    alumnos = JSON.parse(localStorage.getItem('examen_alumnos'))
    if(alumnos.length==0){
        noHayAlumnos()
    }else{
        alumnos.forEach(alumno=>{
            let ficha = document.createElement('article')
            ficha.classList.add('ficha')
    
            let arriba = document.createElement('div')
            arriba.classList.add('arriba')
            let imgContainer = document.createElement('div')
            imgContainer.classList.add('imgContainer')
            imgContainer.style.backgroundImage=`url(${alumno.imagen})`
        
            let textContainer = document.createElement('div')
            textContainer.classList.add('textContainer')
    
            let nombre = document.createElement('p')
            nombre.textContent=alumno.nombre
    
            let apellidos = document.createElement('p')
            apellidos.textContent=alumno.apellidos
    
            let dni = document.createElement('p')
            dni.textContent=alumno.dni
    
            textContainer.appendChild(nombre)
            textContainer.appendChild(apellidos)
            textContainer.appendChild(dni)
        
            arriba.appendChild(imgContainer)
            arriba.appendChild(textContainer)
    
            let abajo = document.createElement('div')
            abajo.classList.add('abajo')
    
            let bio = document.createElement('p')
            bio.classList.add('bio')
            bio.textContent=alumno.bio
            abajo.appendChild(bio)
    
            let botonera = document.createElement('div')
            botonera.classList.add('botonera')
            
            let btnEdit = document.createElement('i')
            btnEdit.classList.add('fa-solid')
            btnEdit.classList.add('fa-pen-to-square')
            botonera.appendChild(btnEdit)
    
            let btnDelete1 = document.createElement('i')
            btnDelete1.classList.add('fa-solid')
            btnDelete1.classList.add('fa-trash')
            btnDelete1.classList.add('warning')
            botonera.appendChild(btnDelete1)
    
            let btnDelete2 = document.createElement('i')
            btnDelete2.classList.add('fa-solid')
            btnDelete2.classList.add('fa-trash')
            btnDelete2.classList.add('alert')
            btnDelete2.classList.add('oculto')
            botonera.appendChild(btnDelete2)
            
            btnDelete1.addEventListener('click', (e)=>{
                btnDelete2.classList.remove('oculto')
            })
            btnDelete2.addEventListener('click', (e)=>{
                borraAlumno(alumno.dni)
            })
            abajo.appendChild(botonera)
    
            ficha.appendChild(arriba)
            ficha.appendChild(abajo)
            contenedor.appendChild(ficha)
        })
    }
}else{
    noHayAlumnos()
}