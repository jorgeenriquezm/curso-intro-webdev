console.log("Empezamos")

//setTimeout(función, retraso-en-ms)
//setTimeout nos permite ejecutar un código
//con el retraso que le digamos (en ms)
setTimeout(()=>{
    //codigo a ejecutar
    console.log("Han pasado 3 segundos")
}, 3000) //3000 ms es el retraso con el que se ejecuta

//setInterval nos permite ejecutar un codigo
//REPETIDAMENTE con el retraso que le digamos
setInterval(()=>{
    //codigo a ejecutar
    console.log("Ha pasado un segundo")
}, 1000) //Cada cuanto tiempo se ejecuta

//Si queremos detener un intervalo, tenemos que
//guardarlo en una variable para posteriormente
//usar clearInterval(variable) para detenerlo
var miIntervalo = setInterval(()=>{
    console.log("Ha pasado medio segundo")
}, 500)

clearInterval(miIntervalo)