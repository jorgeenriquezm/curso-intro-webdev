let alumnos =[]
let oleksander = {
    nombre:"Oleksander",
    apellido:"XXXXXXXX",
    nota1:10,
    nota2:9,
    nota3:8
}
let anna = {
    nombre:"Anna",
    apellido:"YYYYYYYYYY",
    nota1:10,
    nota2:10,
    nota3:10
}
alumnos.push(oleksander)
alumnos.push(anna)
/* 
function getAlumno(cual){
    let elegido = alumnos[cual]
    console.log(elegido)
}
getAlumno(0) */


function getAlumnoByName(name){
    var encontrado = false
    console.log('----------------------------')
    for(i=0; i<alumnos.length;i++){
        if(name==alumnos[i].nombre){
            encontrado=true
            console.log(alumnos[i])
            document.write("Notas del alumno:"+"</br>")
            document.write("Nota 1: "+alumnos[i].nota1+"</br>")
            document.write("Nota 2: "+alumnos[i].nota2+"</br>")
            document.write("Nota 3: "+alumnos[i].nota3+"</br>")
        }
    }
    if(encontrado==false){
        console.log("No existe ningún alumno con el nombre "+name)
    }
    console.log('----------------------------')
}

getAlumnoByName('Oleksander')
getAlumnoByName('Jorge')