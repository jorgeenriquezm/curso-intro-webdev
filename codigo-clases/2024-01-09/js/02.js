let alumnos = ["Oleksander", "Michael", "Mariem", "Joseph", "Ricardo"]

console.log(alumnos[0])

console.log("El array alumnos tiene "+alumnos.length+" elementos")
console.log("Aquí abajo empieza el for")
console.log('------------------------')
for(i=0; i<alumnos.length; i++){
    console.log(alumnos[i])
}
console.log('------------------------')
console.log("Aquí arriba acaba el for")


alumnos.push("Jorge")
console.log(alumnos)