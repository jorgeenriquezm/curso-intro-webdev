const btnGuardar = document.querySelector('form')
let articulos
console.log(localStorage.getItem('tienda_articulo'))
if(localStorage.getItem('tienda_articulo')){
    articulos = JSON.parse(localStorage.getItem('tienda_articulos'))
    console.log(articulos)
}else{
    articulos=[]
}

btnGuardar.addEventListener('submit', (e)=>{
    e.preventDefault()
    let articulo = {}
    articulo.sku = document.querySelector('#sku').value
    articulo.imagen = document.querySelector('#imagen').value
    articulo.titulo = document.querySelector('#titulo').value
    articulo.precio = document.querySelector('#precio').value
    articulo.stock = document.querySelector('#stock').value
    articulo.descripcion = document.querySelector('#descripcion').value
    console.log(articulos)
    articulos.push(articulo)
    console.log(articulos)
    localStorage.setItem('tienda_articulos', JSON.stringify(articulos))
    e.target.reset()
})