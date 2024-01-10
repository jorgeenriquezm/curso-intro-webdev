//Creamos un array vacío donde vamos a ir guardando todos los generados
var alumnos = []

for(i=1;i<=100;i++){
    //Creamos un nuevo objeto alumno{}
    var alumno = {
        //Creamos sus propiedades y les vamos dando valores
        //Con Math.random() generamos un número aleatorio
        //Multiplicándolo por X hacemos que no llegue sólo hasta 1
        //Con .toFixed(2) le indicamos que lo deje en 2 decimales
        //Como .toFixed() nos lo convierte a texto, 
        //con parseFloat volvemos a convertirlo a número con decimales
        dni:Math.round(Math.random()*90000000)+1000000,
        nota1:parseFloat((Math.random()*10).toFixed(2)),
        nota2:parseFloat((Math.random()*10).toFixed(2)),
        nota3:parseFloat((Math.random()*10).toFixed(2)),
    }
    //Una vez creado, cogemos sus tres notas y calculamos la media
    alumno.notaMedia = ((alumno.nota1+alumno.nota2+alumno.nota3)/3).toFixed(2)
    //Lo añadimos al array de alumnos
    alumnos.push(alumno)
    //Y los sacamos por pantalla directamente con document.write
    document.write(`<div class='alumno'>
    <p>DNI: ${alumno.dni}</p>
    <p>Nota 1: ${alumno.nota1}</p>
    <p>Nota 2: ${alumno.nota2}</p>
    <p>Nota 3: ${alumno.nota3}</p>
    <p>Nota media: ${alumno.notaMedia}</p>
    </div>`)
}