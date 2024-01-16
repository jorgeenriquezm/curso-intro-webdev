localStorage.setItem('nombre', 'Mariem')
const estudiante={
    nombre:"Mariem",
    apellido:"XXXX",
    edad:"YYY",
    media:9
}
localStorage.setItem('estudiante', JSON.stringify(estudiante))


console.log(JSON.parse(localStorage.getItem('estudiante')))


//alert(localStorage.getItem('nombre'))