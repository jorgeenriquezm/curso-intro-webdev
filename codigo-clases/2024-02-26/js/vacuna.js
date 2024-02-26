const colores = ['red', 'green', 'blue', 'pink', 'orange', 'blueviolet']
const cuadrosArriba = document.querySelectorAll('#columna-1-2 div.color')
const cuadrosM = document.querySelectorAll('#fila-2 .opcion')
const cuadrosAbajo = document.querySelectorAll('#columna-3-2 div.color')
let lastClicked = 0

cuadrosArriba.forEach(cuadro=>{
    cuadro.style.backgroundColor = colores[Math.round(Math.random()*5)]
})

const verificaVacuna = ()=>{
    if(cuadrosArriba[0].style.backgroundColor==cuadrosAbajo[0].style.backgroundColor &&
        cuadrosArriba[1].style.backgroundColor==cuadrosAbajo[1].style.backgroundColor &&
        cuadrosArriba[2].style.backgroundColor==cuadrosAbajo[2].style.backgroundColor){
            alert('Todo ok, lo has hecho')
        }else{
            alert('Has fallado, hazlo de nuevo')
        }
}

console.log(cuadrosM)
const cuadrosMedio = [...cuadrosM]
console.log(cuadrosMedio)
cuadrosMedio.map((cuadro, idx)=>{
    cuadro.style.backgroundColor=colores[idx]
    cuadro.addEventListener('click', (e)=>{
        cuadrosAbajo[lastClicked].style.backgroundColor = e.target.style.backgroundColor
        lastClicked++
        if(lastClicked==3){
            verificaVacuna()
        }
    })
})


cuadrosAbajo.forEach(cuadro=>{
    cuadro.style.backgroundColor = 'white'
})
