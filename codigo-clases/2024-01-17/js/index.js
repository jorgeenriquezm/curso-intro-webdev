const padre = document.querySelector('#padre')
let elementos = document.querySelectorAll('.item')
console.log(elementos)




function creaHijo(texto){
    let elemento = document.createElement('div')
    elemento.classList.add('item')
    
    const parrafo = document.createElement('p')
    parrafo.innerHTML=texto
    elemento.appendChild(parrafo)

    const imagen = document.createElement('img')
    imagen.src='https://cdn-icons-png.flaticon.com/512/1404/1404945.png'
    elemento.appendChild(imagen)

    padre.appendChild(elemento)
    elementos = document.querySelectorAll('.item')
    console.log(elementos)
}

creaHijo('Hijo 1')
creaHijo('Hijo 2')
creaHijo('Hijo 3')
creaHijo('Hijo 4')
