let alumnos = []


for(i=1;i<=100;i++){
    let alumno = {
        dni:Math.round(Math.random()*99000000+1000000),
        nota1:parseFloat((Math.random()*10).toFixed(2)),
        nota2:parseFloat((Math.random()*10).toFixed(2)),
        nota3:parseFloat((Math.random()*10).toFixed(2))
    }
    alumno.notaMedia=parseFloat(((alumno.nota1+alumno.nota2+alumno.nota3)/3).toFixed(2))
    alumnos.push(alumno)
}
console.log(alumnos)


