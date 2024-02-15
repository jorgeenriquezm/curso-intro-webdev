const formularioGuardado = document.querySelector('form')
let articulos
//Antes de hacer nada, comprobamos si hay información ya guardada...
if(localStorage.getItem('tienda_articulo')){
    //...si la hay, la cargamos y añadimos al array donde vamos a guardar
    articulos = JSON.parse(localStorage.getItem('tienda_articulos'))
}else{
    //Si no hay nada guardado, inicializamos en array vacío
    articulos=[]
}

formularioGuardado.addEventListener('submit', (e)=>{
    //Usamos preventDefault() para evitar el comportamiento por defecto
    //del formulario, ya que hace una redirección que queremos evitar.
    e.preventDefault()
    //Tenemos que crear un artículo nuevo, será de tipo objeto para
    //así guardar su información con clave:valor
    let articulo = {}
    articulo.sku = document.querySelector('#sku').value
    articulo.imagen = document.querySelector('#imagen').value
    articulo.titulo = document.querySelector('#titulo').value
    articulo.precio = document.querySelector('#precio').value
    articulo.stock = document.querySelector('#stock').value
    articulo.descripcion = document.querySelector('#descripcion').value
    //Una vez creado el artículo, lo añadimos al array donde los estamos guardando
    articulos.push(articulo)
    //y este array lo guardamos en localStorage para tener ambos orígenes sincronizados con la misma info
    localStorage.setItem('tienda_articulos', JSON.stringify(articulos))
    //Reseteamos el formulario para vaciar sus campos
    e.target.reset()
})