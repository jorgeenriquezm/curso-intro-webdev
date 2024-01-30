let miArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
console.log('----------------------')
console.log('-----EJERCICIO 1------')
console.log('----------------------')
for(i=0;i<miArray.length;i++){
    console.log(miArray[i])
}
console.log('----------------------')
console.log('-----EJERCICIO 2------')
console.log('----------------------')
for(i=miArray.length-1;i>=0;i--){
    console.log(miArray[i])
}
console.log('----------------------')
console.log('-----EJERCICIO 3------')
console.log('----------------------')
miArray.forEach(letra=>{console.log(letra)})
console.log('----------------------')
console.log('-----EJERCICIO 4------')
console.log('----------------------')
for(i=0;i<=8;i+=2){
    console.log(`Sacando el elemento ${i} >>>>> ${miArray[i]}.`)
}
console.log('----------------------')
console.log('-----EJERCICIO 5------')
console.log('----------------------')
for(i=2;i<50;i+=2){
    console.log(`Sacando el número par ${i}.`)
}
console.log('----------------------')
console.log('-----EJERCICIO 6------')
console.log('----------------------')
for(i=100;i>=50;i--){
    console.log(`Sacando el número ${i}.`)
}