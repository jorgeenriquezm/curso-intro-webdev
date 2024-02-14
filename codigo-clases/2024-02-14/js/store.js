let articulos = []
const contenedor = document.querySelector('section')
function creaFicha(item){
    let ficha = document.createElement('div')
    ficha.classList.add('ficha')

    let imagen = document.createElement('img')
    imagen.src = item.imagen

    ficha.appendChild(imagen)
    contenedor.appendChild(ficha)
}




if(localStorage.getItem('tienda_articulos')){
    articulos=JSON.parse(localStorage.getItem('tienda_articulos'))
    articulos.forEach(item => {
        creaFicha(item)
    });
}