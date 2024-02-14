const btnGuardar = document.querySelector('#guardar-item')
let articulos = []

if(localStorage.getItem('tienda_articulo')){
    articulos = JSON.parse(localStorage.getItem('tienda_articulos'))
}

btnGuardar.addEventListener('click', ()=>{
    let articulo = {}
    articulo.sku = document.querySelector('#sku').value
    articulo.imagen = document.querySelector('#imagen').value
    articulo.titulo = document.querySelector('#titulo').value
    articulo.precio = document.querySelector('#precio').value
    articulo.stock = document.querySelector('#stock').value
    articulo.descripcion = document.querySelector('#descripcion').value

    articulos.push(articulo)
    localStorage.setItem('tienda_articulos', JSON.stringify(articulos))

})