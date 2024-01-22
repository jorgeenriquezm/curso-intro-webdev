//Creamos los 5 contadores que vamos a usar para contabilizar los clicks
//Les daremos valor comprobando si en localStorage tienen valor o no
let c1, c2, c3, c4, c5
//Seleccionamos también las 5 barras
let ba1 = document.querySelector('.barra:nth-of-type(1)')
let ba2 = document.querySelector('.barra:nth-of-type(2)')
let ba3 = document.querySelector('.barra:nth-of-type(3)')
let ba4 = document.querySelector('.barra:nth-of-type(4)')
let ba5 = document.querySelector('.barra:nth-of-type(5)')
//Aquí guardaremos en total de clicks (+ los guardados en localStorage)
let total = 0
//El marcador donde vamos a escribir el total de arriba
let contador = document.querySelector('#contador')

/*Primero comprobamos si el contador es nulo en localStorage, eso significaría que
no hay nada guardados y entonces tenemos que inicializar ese contador a 0 y el localStorage ya de paso también*/
if(localStorage.getItem('c1')==null){
    c1=0
    localStorage.setItem('c1', 0)
}else{
    c1=parseInt(localStorage.getItem('c1'))
}
//Hacemos lo mismo con los contadores 2, 3, 4 y 5
if(localStorage.getItem('c2')==null){
    c2=0
    localStorage.setItem('c2', 0)
}else{
    c2=parseInt(localStorage.getItem('c2'))
}

if(localStorage.getItem('c3')==null){
    c3=0
    localStorage.setItem('c3', 0)
}else{
    c3=parseInt(localStorage.getItem('c3'))
}

if(localStorage.getItem('c4')==null){
    c4=0
    localStorage.setItem('c4', 0)
}else{
    c4=parseInt(localStorage.getItem('c4'))
}

if(localStorage.getItem('c5')==null){
    c5=0
    localStorage.setItem('c5', 0)
}else{
    c5=parseInt(localStorage.getItem('c5'))
}
/* Esta función se va a encargar de dibujar todo lo correspondiente a las barras
calculando con una regla de 3 el porcentaje que le corresponde a cada una según el total de clicks*/
function actualizaBarras(){
    ba1.style.width = (c1*100)/total+'%'
    ba2.style.width = (c2*100)/total+'%'
    ba3.style.width = (c3*100)/total+'%'
    ba4.style.width = (c4*100)/total+'%'
    ba5.style.width = (c5*100)/total+'%'
    ba1.innerHTML = ((c1*100)/total).toFixed(2)+'%'
    ba2.innerHTML = ((c2*100)/total).toFixed(2)+'%'
    ba3.innerHTML = ((c3*100)/total).toFixed(2)+'%'
    ba4.innerHTML = ((c4*100)/total).toFixed(2)+'%'
    ba5.innerHTML = ((c5*100)/total).toFixed(2)+'%'
}
function actualizaContador(){
    total = c1+c2+c3+c4+c5
    contador.innerHTML = total
    actualizaBarras()
}
actualizaContador()
function actualizaTotal(){    
    total++
    actualizaContador()    
}
/* Como por ahora no sabéis hacer esto de forma dinámica, tenemos que repetir este bloque 
de abajo para los 5 botones que tenemos */
let b1 = document.querySelector('#boton_1')
b1.addEventListener('click', ()=>{
    //Le sumamos al contador individual
    c1++
    //Lo guardamos en localStorage para que siempre coincidan los datos
    localStorage.setItem('c1', c1)
    //Y lo renderizamos en el contador global
    actualizaTotal()
})

let b2 = document.querySelector('#boton_2')
b2.addEventListener('click', ()=>{
    c2++
    localStorage.setItem('c2', c2)
    actualizaTotal()
})

let b3 = document.querySelector('#boton_3')
b3.addEventListener('click', ()=>{
    c3++
    localStorage.setItem('c3', c3)
    actualizaTotal()
})

let b4 = document.querySelector('#boton_4')
b4.addEventListener('click', ()=>{
    c4++
    localStorage.setItem('c4', c4)
    actualizaTotal()
})

let b5 = document.querySelector('#boton_5')
b5.addEventListener('click', ()=>{
    c5++
    localStorage.setItem('c5', c5)
    actualizaTotal()
})
