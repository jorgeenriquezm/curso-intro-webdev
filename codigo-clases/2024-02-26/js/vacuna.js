const colores = ['red', 'green', 'blue', 'pink', 'orange', 'blueviolet']
const cuadrosArriba = document.querySelectorAll('#columna-1-2 div.color')
const cuadrosM = document.querySelectorAll('#fila-2 .opcion')
const cuadrosAbajo = document.querySelectorAll('#columna-3-2 div.color')

cuadrosArriba.forEach(cuadro=>{
    cuadro.style.backgroundColor = colores[Math.round(Math.random()*5)]
})


console.log(cuadrosM)
const cuadrosMedio = [...cuadrosM]
console.log(cuadrosMedio)
cuadrosMedio.map((cuadro, idx)=>{
    cuadro.style.backgroundColor=colores[idx]
})


cuadrosAbajo.forEach(cuadro=>{
    cuadro.style.backgroundColor = 'white'
})
