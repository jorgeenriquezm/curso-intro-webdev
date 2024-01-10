//Creamos dos variables donde vamos a ir almacenando cuantas veces sale cada opción
let cara=0
let cruz=0

for(i=1; i<=100; i++){
    let tirada = Math.random()
    if(tirada<0.5){
        //consideramos que es cara
        cara++
    }else{
        cruz++
    }
}
document.write(`<p>Ha salido cara ${cara} veces.</p>`)
document.write(`<p>Ha salido cara ${cruz} veces.</p>`)