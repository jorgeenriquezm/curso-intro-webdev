let alumnos = []
if(localStorage.getItem('examen_alumnos')){
    alumnos = JSON.parse(localStorage.getItem('examen_alumnos'))
}

const formulario = document.querySelector('form')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    let alumno={}
    alumno.nombre = document.querySelector('#nombre').value
    alumno.apellidos = document.querySelector('#apellidos').value
    alumno.imagen = document.querySelector('#imagen').value
    alumno.dni = document.querySelector('#dni').value
    alumno.bio = document.querySelector('#bio').value

    console.log(alumno)
    console.log(alumnos)
    alumnos.push(alumno)
    localStorage.setItem('examen_alumnos', JSON.stringify(alumnos))
    formulario.reset()
})