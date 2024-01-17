let lista = []
function marcaComoComprado(cual){
    lista.forEach(elemento=>{
        if(elemento.nombre==cual){
            elemento.comprado=true
        }
    })
    localStorage.setItem('lista', JSON.stringify(lista))
}
function borraElemento(cual){
    /* lista.forEach(elemento=>{
        if(elemento.nombre==cual){
            elemento.comprado=true
        }
    }) */
    lista.map((elemento, idx)=>{
        if(elemento.id===cual){
            lista.splice(idx, 1)
            localStorage.setItem('lista', JSON.stringify(lista))
        }
    })
    location.reload()
}
const contenedor = document.querySelector('#listado')
if(localStorage.getItem('lista')==null){
    alert("La lista está vacía")
}else{
    lista = JSON.parse(localStorage.getItem('lista'))
    console.log(lista)
    lista.forEach(item => {
        let elemento = document.createElement('div')
        elemento.classList.add('item')

        elemento.setAttribute('data-id', item.id);

        let imagen = document.createElement('img')
        imagen.src=item.url
        imagen.alt=item.nombre
        elemento.appendChild(imagen)

        
        
        let nombre = document.createElement('p')
        let nombre_txt = document.createTextNode(item.nombre)
        nombre.appendChild(nombre_txt)
        elemento.appendChild(nombre)
        contenedor.appendChild(elemento)
        
        let iconoComprado = document.createElement('i')
        iconoComprado.classList.add('fa-solid')
        iconoComprado.classList.add('fa-square-check')
        elemento.appendChild(iconoComprado)
        iconoComprado.addEventListener('click', (e)=>{
            const padre = e.target.parentNode
            marcaComoComprado(padre.querySelector('p').innerHTML)
            e.target.parentNode.style.opacity=0.25
        })

        let iconoBorrado = document.createElement('i')
        iconoBorrado.classList.add('fa-solid')
        iconoBorrado.classList.add('fa-trash')
        elemento.appendChild(iconoBorrado)
        iconoBorrado.addEventListener('click', (e)=>{
            borraElemento(item.id)
        })
    });
}

