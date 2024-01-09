//Creamos un array donde vamos a ir guardando los alumnos
let alumnos = []
//con {} creamos un objeto
let jorge ={
    //los objetos tienen pares clave:valor y estos van separados con ,
    nombre:"Jorge",
    apellido:"Enríquez",
    edad:22
}
alumnos.push(jorge)
//accedemos a sus propiedades con el nombre de ellas
alumnos[0].nombre
//con </br> hacemos un salto de línea (break rule)
document.write(jorge.nombre+'</br>')
//podemos crear etiquetas así aunque ya veremos formas más avanzadas
//y correctas para añadir elementos al DOM (document object model)
document.write('<p>'+jorge.apellido+'</p>')
//escribimos esas propiedades asignándoles valor con un =
jorge.apellido="Johnson"