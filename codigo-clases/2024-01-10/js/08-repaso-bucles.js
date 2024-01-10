//1 Hacer un ejercicio que saque 100 números aleatorios sin decimales entre 0 y 100 (ambos inclusive)
console.log('Ejercicio 2')
for(i=1;i<=100;i++){
    console.log(Math.round(Math.random()*100))
}
//2 Hacer un ejercicio que saque 50 números aleatorios entre 25 y 75 (ambos inclusive)
console.log('Ejercicio 2')
for(i=1;i<=50;i++){
    console.log(Math.round(Math.random()*50)+25)
}
//3 Hacer un ejercicio que tenga un array con 10 elementos y saque 20 veces por consola uno cualquiera de forma aleatoria.
console.log('Ejercicio 3')
let letras = ["a","b","c","d","e","f","g","h","i","j"]
for(i=1;i<=20;i++){
    let aleatorio = Math.round(Math.random()*9)
    console.log(letras[aleatorio])
}
//4 Hacer un ejercicio que empiece con un array VACÍO y se le añadan 100 números aleatorios enteros entre 1 y 100 (ambos incluidos). Añadimos a un array con push().
console.log('Ejercicio 4')
let arrayVacio = []
for(i=1;i<=100;i++){
    arrayVacio.push(Math.round(Math.random()*99)+1)
}
//5 Una vez añadidos los 100 números, los sacamos de uno en uno por consola.
console.log('Ejercicio 5')
arrayVacio.forEach(numero=>{
    console.log(numero)
})
//6 Utilizando el array del ejercicio anterior, sacamos los 100 números del último elemento del array al primero.
console.log('Ejercicio 6')
for(i=99; i>=0; i--){
    console.log(arrayVacio[i])
}
//7 Hacer un array con los días de la semana y sacarlos por orden. Volver a sacarlos de último a primero.
console.log('Ejercicio 7')
let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"]
dias.forEach(dia=>{
    console.log(dia)
})
console.log("Al revés...")
for(i=dias.length-1;i>=0;i--){
    console.log(dias[i])
}