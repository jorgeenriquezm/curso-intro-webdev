let articulos = []
let itemsInCart=0
const cartSpan = document.querySelector('#carrito span')
const contenedor = document.querySelector('section')
function creaFicha(item){
    let ficha = document.createElement('div')
    ficha.classList.add('ficha')

    let imagen = document.createElement('img')
    imagen.src = item.imagen

    let titulo = document.createElement('p')
    titulo.classList.add('titulo')
    titulo.innerHTML=item.titulo

    let atc = document.createElement('div')
    atc.classList.add('atc')
    atc.innerHTML='<i class="fa-solid fa-cart-plus"></i>'
    atc.addEventListener('click',(e)=>{
        itemsInCart++
        cartSpan.innerHTML=`(${itemsInCart})`
    })

    ficha.appendChild(imagen)
    ficha.appendChild(titulo)
    ficha.appendChild(atc)
    contenedor.appendChild(ficha)
}




if(localStorage.getItem('tienda_articulos')){
    articulos=JSON.parse(localStorage.getItem('tienda_articulos'))
    articulos.forEach(item => {
        creaFicha(item)
    });
}