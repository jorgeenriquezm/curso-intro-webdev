localStorage.setItem("nombre", "Joseph")

var alumno = {
    nombre:"Joseph",
    media:9,
    edad:20
}

localStorage.setItem("alumno", JSON.stringify(alumno))


console.log(localStorage.getItem('nombre'))
console.log(JSON.parse(localStorage.getItem('alumno')))