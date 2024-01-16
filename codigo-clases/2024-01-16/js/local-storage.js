/*localStorage es una API de HTML que nos permite el almacenaje
en local de la información que nos haga falta. Reseñar que esta información
se guarda siempre como string y tendremos que parsearla para poder
operar con ella si no fuera el tipo de dato que necesitamos */

//Para guardar un elemento, usamos localStorage.setItem("nombre-del-elemento", valor-del-elemento)
//Cuando queramos guardar un tipo de dato complejo, array, objeto... debemos usar JSON.stringify() para que nos lo convierta a string de la forma correcta
//localStorage.setItem("nombre", "Jorge")
//localStorage.setItem("alumno", JSON.stringify(alumno))
var alumno ={
    nombre:"Jorge",
    apellido:"Enríquez",
    media:6.66
}
localStorage.setItem("alumno", JSON.stringify(alumno))

//Cuando queremos cargar información, vamos a utilizar localStorage.getItem('elemento-a-cargar')
//localStorage.getItem('nombre')
//Si cargamos un objeto complejo previamente convertido a string,
//tenemos que parsearlo a su tipo de dato original con JSON.parse()
console.log(JSON.parse(localStorage.getItem("alumno")))