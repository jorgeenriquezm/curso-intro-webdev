let contenedor = document.querySelector('main')
let alumnos =['Ricardo', 'Michael', 'Mariem', 'Jorge']

alumnos.forEach(alumno=>{
    let el = document.createElement('div')
    el.classList.add('elemento')
    el.innerHTML = alumno
    contenedor.appendChild(el)
})