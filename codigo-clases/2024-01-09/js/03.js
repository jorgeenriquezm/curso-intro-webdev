let numeros = []

for(i=1; i<=100; i++){
    //con push() añadimos elementos al final de un array
    numeros.push(i)
}
console.log(numeros)
//con unshift() añadimos elementos al inicio de un array
numeros.unshift(999)
console.log(numeros)