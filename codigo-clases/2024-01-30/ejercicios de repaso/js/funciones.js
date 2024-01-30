let miArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
function escribeEnPantallaEjercicio(cual){
    document.write(`<p>----- EJERCICIO ${cual} ------</p>`)
}
console.log('----------------------')
console.log('-----EJERCICIO 1------')
console.log('----------------------')
escribeEnPantallaEjercicio(1)
function sacaElemento(elArray, idx){
    document.write(`<p>${elArray[idx]}</p>`)
}
sacaElemento(miArray, 4)

console.log('----------------------')
console.log('-----EJERCICIO 1------')
console.log('----------------------')
escribeEnPantallaEjercicio(2)
function sacaUltimo(elArray){
    document.write(`<p>${elArray[elArray.length-1]}</p>`)
}
sacaUltimo(miArray, 4)
console.log('----------------------')
console.log('-----EJERCICIO 3------')
console.log('----------------------')
escribeEnPantallaEjercicio(3)
function tieneMasDeCinco(elArray){
    return elArray.length>5
}
document.write(`<p>${tieneMasDeCinco(miArray)}</p>`)
document.write(`<p>${tieneMasDeCinco([])}</p>`)
console.log('----------------------')
console.log('-----EJERCICIO 4------')
console.log('----------------------')
escribeEnPantallaEjercicio('4 - En consola')
function borraIndice(a, idx){
    a.splice(idx, 1)
}
console.log(miArray)
borraIndice(miArray, 3)
console.log(miArray)
console.log('----------------------')
console.log('-----EJERCICIO 5------')
console.log('----------------------')
escribeEnPantallaEjercicio(5)
function sacaNumeros(desde, hasta){
    if(hasta>desde){
        for(i=desde;i<=hasta;i++){
            document.write(`<p>${i}</p>`)
        }
    }else{
        document.write(`<p>El primer número tiene que ser menor al segundo.</p>`)
    }
}
sacaNumeros(10, 30)
sacaNumeros(30,10)